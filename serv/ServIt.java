package com.serv;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.codehaus.jackson.map.ObjectMapper;

import com.google.gson.Gson;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;

/**
 * Servlet implementation class ServIt
 */
public class ServIt extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * Default constructor. 
	 */
	public ServIt() {
		// TODO Auto-generated constructor stub
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("application/json");            
		response.setHeader("Cache-control", "no-cache, no-store");
		response.setHeader("Pragma", "no-cache");
		response.setHeader("Expires", "-1");
		response.setHeader("Access-Control-Allow-Origin", "*");
		response.setHeader("Access-Control-Allow-Methods", "POST");
		response.setHeader("Access-Control-Allow-Headers", "Content-Type");
		response.setHeader("Access-Control-Max-Age", "86400");
		Double lat = 0.0;
		Double lon = 0.0;
		Integer sumOfPatients = 0;
		if(request.getParameter("applepie")!=null) {
		sumOfPatients=Integer.parseInt(request.getParameter("applepie"));
		System.out.println("total number of patients"+sumOfPatients);
		}
		//response.getWriter().write(sumOfPatients);
		if(request.getParameter("lat") != null) {
		lat = Double.parseDouble(request.getParameter("lat"));
		lon = Double.parseDouble(request.getParameter("lon"));
		System.out.println("Curent Co-ordinate of the user");
		System.out.println(lon+","+lat);
		}
		
		/*
		String formfod=request.getParameter("formfod");
		String formclothing=request.getParameter("formclothing");
		String formwater=request.getParameter("formwater");
		String formmedication=request.getParameter("formmedication");
		String formothers=request.getParameter("formothers");

		System.out.println("Operator One");
		System.out.println("Food Packages Required :"+formfod);
		System.out.println("Clothing Required :"+formclothing);
		System.out.println("Water Resource Required :"+formwater);
		System.out.println("Medication required :"+formmedication);
		System.out.println("Other Resources :"+formothers);
		 */
		
        ObjectMapper mapper = new ObjectMapper();
        //int[] intArray = new int[]{ 1,2,3,4,5};
        
        //Locate[] locationArray= new Locate[8];
		List<Locate> locationArray=new ArrayList<Locate>();        
		Locate locate1=new Locate(-71.1474609375,43.48481212891604);
		Locate locate2=new Locate(-72.59765625,43.18114705939967);
		Locate locate3=new Locate(-71.89453125,42.374778361114195);
		Locate locate4=new Locate(-72.509765625,41.85319643776675);
		Locate locate5=new Locate(-73.1689453125,42.407234661551875);
		Locate locate6=new Locate(-74.06982421875,43.659924074789);
		Locate locate7=new Locate(-72.158203125,44.66865287227321);
		Locate locate8=new Locate(-70.1806640625,44.88701247981298);
		locationArray.add(locate1);
		locationArray.add(locate2);
		locationArray.add(locate3);
		locationArray.add(locate4);
		locationArray.add(locate5);
		locationArray.add(locate6);
		locationArray.add(locate7);
		locationArray.add(locate8);

        mapper.writeValue(response.getOutputStream(), locationArray);
			
	}
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}
}
