library(sp)
library(maps)
library(maptools)
library(httr)

gpclibPermit()
# The single argument to this function, pointsDF, is a data.frame in which:
#   - column 1 contains the longitude in degrees (negative in the US)
#   - column 2 contains the latitude in degrees

latlong2county <- function(pointsDF) {
  # Prepare SpatialPolygons object with one SpatialPolygon
  # per state (plus DC, minus HI & AK)
  states <- map('county', fill=TRUE, col="transparent", plot=FALSE)
  IDs <- sapply(strsplit(states$names, ":"), function(x) x[1])
  states_sp <- map2SpatialPolygons(states, IDs=IDs,
                                   proj4string=CRS("+proj=longlat +datum=WGS84"))
  
  # Convert pointsDF to a SpatialPoints object 
  pointsSP <- SpatialPoints(pointsDF, 
                            proj4string=CRS("+proj=longlat +datum=WGS84"))
  
  # Use 'over' to get _indices_ of the Polygons object containing each point 
  indices <- over(pointsSP, states_sp)
  
  # Return the state names of the Polygons object containing each point
  stateNames <- sapply(states_sp@polygons, function(x) x@ID)
  stateNames[indices]
}

# Test the function using points in Wisconsin and Oregon.
testPoints <- data.frame(x = (-(as.integer(commandArgs(TRUE)[1]))), y = (as.integer(commandArgs(TRUE)[2])))
county<-latlong2county(testPoints)

fips<-with(county.fips, fips[match(county, polyname)])
fips
dattable = read.csv("DE1_0_2008_Beneficiary_Summary_File_Sample_1.csv", header = TRUE)
v1 <- dattable[[9]]
z <- sum(v1 == fips)
r <- GET("http://10.192.204.78:8080/Uhack1/ServIt", query = list(applepie = z))

         
