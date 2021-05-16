var i;
function getTotal()
{
	
	document.getElementById("totalsum").value='';
	var totalsum=0;
	
	var price1=document.getElementById("price1").value;
	var price2=document.getElementById("price2").value;
	var price3=document.getElementById("price3").value;
	var price4=document.getElementById("price4").value;
	var price5=document.getElementById("price5").value;
	var price6=document.getElementById("price6").value;
	var price7=document.getElementById("price7").value;			
	var price8=document.getElementById("price8").value;
	var price9=document.getElementById("price9").value;
	var price10=document.getElementById("price10").value;
	var price11=document.getElementById("price11").value;
	var price12=document.getElementById("price12").value;
	var price13=document.getElementById("price13").value;
	var price14=document.getElementById("price14").value;
	var price15=document.getElementById("price15").value;
	var price16=document.getElementById("price16").value;
	var price17=document.getElementById("price17").value;
	var price18=document.getElementById("price18").value;
	var price19=document.getElementById("price19").value;
	var price20=document.getElementById("price20").value;
	var price21=document.getElementById("price21").value;
	var price22=document.getElementById("price22").value;
	var price23=document.getElementById("price23").value;
	var price24=document.getElementById("price24").value;
	var price25=document.getElementById("price25").value;
	var price26=document.getElementById("price26").value;
	var price27=document.getElementById("price27").value;
	var price28=document.getElementById("price28").value;
	var price29=document.getElementById("price29").value;
	var price30=document.getElementById("price30").value;
	var price31=document.getElementById("price31").value;
	var price32=document.getElementById("price32").value;
	var price33=document.getElementById("price33").value;
	var price34=document.getElementById("price34").value;
	var price35=document.getElementById("price35").value;
	var price36=document.getElementById("price36").value;
	var price37=document.getElementById("price37").value;
	var price38=document.getElementById("price38").value;
	var price39=document.getElementById("price39").value;
	var price40=document.getElementById("price40").value;
	var price41=document.getElementById("price41").value;
	var price42=document.getElementById("price42").value;
	var price43=document.getElementById("price43").value;
	var price44=document.getElementById("price44").value;
	var price45=document.getElementById("price45").value;
	var price46=document.getElementById("price46").value;
	var price47=document.getElementById("price47").value;
	var price48=document.getElementById("price48").value;
	var price49=document.getElementById("price49").value;
	var price50=document.getElementById("price50").value;
	var price51=document.getElementById("price51").value;
	var price52=document.getElementById("price52").value;
	
	var qty1=document.getElementById("qty1").value;
	var qty2=document.getElementById("qty2").value;
	var qty3=document.getElementById("qty3").value;
	var qty4=document.getElementById("qty4").value;
	var qty5=document.getElementById("qty5").value;
	var qty6=document.getElementById("qty6").value;
	var qty7=document.getElementById("qty7").value;
	var qty8=document.getElementById("qty8").value;
	var qty9=document.getElementById("qty9").value;
	var qty10=document.getElementById("qty10").value;
	var qty11=document.getElementById("qty11").value;
	var qty12=document.getElementById("qty12").value;
	var qty13=document.getElementById("qty13").value;
	var qty14=document.getElementById("qty14").value;
	var qty15=document.getElementById("qty15").value;
	var qty16=document.getElementById("qty16").value;
	var qty17=document.getElementById("qty17").value;
	var qty18=document.getElementById("qty18").value;
	var qty19=document.getElementById("qty19").value;
	var qty20=document.getElementById("qty20").value;
	var qty21=document.getElementById("qty21").value;
	var qty22=document.getElementById("qty22").value;
	var qty23=document.getElementById("qty23").value;
	var qty24=document.getElementById("qty24").value;
	var qty25=document.getElementById("qty25").value;
	var qty26=document.getElementById("qty26").value;
	var qty27=document.getElementById("qty27").value;
	var qty28=document.getElementById("qty28").value;
	var qty29=document.getElementById("qty29").value;
	var qty30=document.getElementById("qty30").value;
	var qty31=document.getElementById("qty31").value;
	var qty32=document.getElementById("qty32").value;
	var qty33=document.getElementById("qty33").value;
	var qty34=document.getElementById("qty34").value;
	var qty35=document.getElementById("qty35").value;
	var qty36=document.getElementById("qty36").value;
	var qty37=document.getElementById("qty37").value;
	var qty38=document.getElementById("qty38").value;
	var qty39=document.getElementById("qty39").value;
	var qty40=document.getElementById("qty40").value;
	var qty41=document.getElementById("qty41").value;
	var qty42=document.getElementById("qty42").value;
	var qty43=document.getElementById("qty43").value;
	var qty44=document.getElementById("qty44").value;
	var qty45=document.getElementById("qty45").value;
	var qty46=document.getElementById("qty46").value;
	var qty47=document.getElementById("qty47").value;
	var qty48=document.getElementById("qty48").value;
	var qty49=document.getElementById("qty49").value;
	var qty50=document.getElementById("qty50").value;
	var qty51=document.getElementById("qty51").value;
	var qty52=document.getElementById("qty52").value;

	 var tprice1=price1*qty1;
	 var tprice2=price2*qty2;
	 var tprice3=price3*qty3;
	 var tprice4=price4*qty4;
	 var tprice5=price5*qty5;
	 var tprice6=price6*qty6;
	 var tprice7=price7*qty7;
	 var tprice8=price8*qty8;
	 var tprice9=price9*qty9;
	 var tprice10=price10*qty10;
	 var tprice11=price11*qty11;
	 var tprice12=price12*qty12;
	 var tprice13=price13*qty13;
	 var tprice14=price14*qty14;
	 var tprice15=price15*qty15;
	 var tprice16=price16*qty16;
	 var tprice17=price17*qty17;
	 var tprice18=price18*qty18;
	 var tprice19=price19*qty19;
	 var tprice20=price20*qty20;
	 var tprice21=price21*qty21;
	 var tprice22=price22*qty22;
	 var tprice23=price23*qty23;
	 var tprice24=price24*qty24;
	 var tprice25=price25*qty25;
	 var tprice26=price26*qty26;
	 var tprice27=price27*qty27;
	 var tprice28=price28*qty28;
	 var tprice29=price29*qty29;
	 var tprice30=price30*qty30;
	 var tprice31=price31*qty31;
	 var tprice32=price32*qty32;
	 var tprice33=price33*qty33;
	 var tprice34=price34*qty34;
	 var tprice35=price35*qty35;
	 var tprice36=price36*qty36;
	 var tprice37=price37*qty37;
	 var tprice38=price38*qty38;
	 var tprice39=price39*qty39;
	 var tprice40=price40*qty40;
	 var tprice41=price41*qty41;
	 var tprice42=price42*qty42;
	 var tprice43=price43*qty43;
	 var tprice44=price44*qty44;
	 var tprice45=price45*qty45;
	 var tprice46=price46*qty46;
	 var tprice47=price47*qty47;
	 var tprice48=price48*qty48;
	 var tprice49=price49*qty49;
	 var tprice50=price50*qty50;
	 var tprice51=price51*qty51;
	 var tprice52=price52*qty52;
	 
	 var totalsum= tprice1+tprice2+tprice3+tprice4+tprice5+tprice6+tprice7+tprice8+tprice9+tprice10+tprice11+tprice12+tprice13+tprice14+tprice15+tprice16+tprice17+tprice18+tprice19+tprice20+tprice1+tprice22
	 +tprice23+tprice24+tprice25+tprice26+tprice27+tprice28+tprice29+tprice30+tprice31+tprice32+tprice33+tprice34+tprice35+tprice36+tprice37+tprice38+tprice39+tprice40+tprice41+tprice42+tprice43+tprice44
	 +tprice45+tprice46+tprice47+tprice48+tprice49+tprice50+tprice51+tprice52;



	document.getElementById("totalsum").value=totalsum;
	
}
			
function receipt() {
		var totalsum = 1;
		var item_coffee = ["Mocha", "White Mocha", "Caramel", "Hazelnut", "Almond Delight", 
		"White Forest", "Black Forest", "Vanilla", "Taro", "Choco Chip", "White Choco Chip",
		"Cookies and Cream", "Salted Caramel", "Matcha", "Strawberry Oreo", "Matcha Oreo",
		"Iced Mocha", "Iced White Mocha", "Iced Caramel Macchiato", "Iced Almond Delight",
		"Iced Hazelnut", "Iced Vanilla", "Cafe Americano", "Hazelnut Latte", "Cafe Latte",
		"Cappuccino", "Cafe Mocha", "White Cafe Mocha", "Caramel Macchiato", "Almond Delight Latte",
		"Hot Choco", "Strawberry", "MixedBerries", "Raspberry", "MILK TEA[22oz.]", "Wintermelon",
		"RSC Dark Choco", "Okinawa", "Hokkaido", "Taro", "Strawberry", "Kiwi", "Raspberry", "Blueberry",
		"Bottled Water", "Pineapple Juice", "Coke Mismo", "Royal Mismo", "Sprite Mismo", "Coke 1.5L",
		"Sprite 1.5L", "Royal 1.5L"];
		var price_total = document.getElementsByClassName("price_coffee");
		var qty_total = document.getElementsByClassName("amt");
		var price = 0;
		var qty = 0;
		var description = "";
		var item = "";
		
				for (var i = 0; i < qty_total.length; ++i) {
					if(qty_total[i].value){
					qty += Number(qty_total[i].value);
					price += Number(price_total[i].value);
					item = item_coffee[i];
				}
			}
		   document.write("<html><head><title>Receipt</title>");
           document.write("<h1 align=center>Kape Garahe</h1>");
		   document.write("<h3 align=center>Total Services</h3>");
           document.write("<div id=div1>");
           document.write("<table border=1 align=center cellpadding=5 cellspacing=5 align=center bgcolor =brown>");
           document.write("<tr>");
		   document.write("<th>Quantity</th>");
		   document.write("<th>Description</th>");
		   document.write("<th>Price</th>");
		   document.write("</tr>");
		   document.write("<tr>");
          document.write("<td><input type=text id=nog name=nog value='" + qty +"' readonly</td>");
           document.write("<td><input type=text id=price name=price value='" + item +"' readonly</td>");
		   document.write("<td><input type=text id=price name=price value='" + price + "' readonly</td>");
		   document.write("</tr>");
		   document.write("<tr>");
          document.write("<td><input type=text id=nog name=nog value='" + qty +"' readonly</td>");
           document.write("<td><input type=text id=item2 name=item2 value='" + item +"' readonly</td>");
		   document.write("<td><input type=text id=price name=price value='" + price + "' readonly</td>");
		   document.write("</tr>");
		   document.write("<tr>");
          document.write("<td><input type=text id=nog name=nog value='" + qty +"' readonly</td>");
           document.write("<td><input type=text id=price name=price value='" + item +"' readonly</td>");
		   document.write("<td><input type=text id=price name=price value='" + price + "' readonly</td>");
		   document.write("</tr>");
		   document.write("<tr>");
          document.write("<td><input type=text id=nog name=nog value='" + qty +"' readonly</td>");
           document.write("<td><input type=text id=price name=price value='" + item +"' readonly</td>");
		   document.write("<td><input type=text id=price name=price value='" + price + "' readonly</td>");
		   document.write("</tr>");
		   document.write("<tr>");
          document.write("<td><input type=text id=nog name=nog value='" + qty +"' readonly</td>");
           document.write("<td><input type=text id=price name=price value='" + item +"' readonly</td>");
		   document.write("<td><input type=text id=price name=price value='" + price + "' readonly</td>");
		   document.write("</tr>");
		   document.write("</table>");
			document.write("<br><br>");
            document.write("<table border=1 align=center cellpadding=5 cellspacing=5 align=center bgcolor=brown>");
			document.write("<tr>");
            document.write("<td> Total Amount:");
            document.write("<input id=price type=text size=8 name=price value='" + price + "' readonly></input>");
			document.write("<tr><td><input type =button value=Print onclick=Popup('+ val1 + ',' + val2 + ',' + val3 + ',' + val4 + ',' + val5 +')>'");
            document.write("</table>");   
			   
			document.write("</body></html>");
			
			document.getElementById("totalsum").value=totalsum;
}		
	
