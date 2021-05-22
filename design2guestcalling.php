<?php

require("connect.php");
if(isset($_GET['Confirm']))
{	

$coffeebased = $_GET['cf'];
$coffeebasedqty = $_GET['qty'];
$creambased = $_GET['crf'];
$creambasedqty = $_GET['qty1'];
$icedcoffee = $_GET['ic'];
$icedcoffeeqty = $_GET['qty2'];
$hotdrinks = $_GET['hd'];
$hotdrinksqty = $_GET['qty3'];
$smoothies = $_GET['sm'];
$smoothiesqty = $_GET['qty4'];
$seriesbottle = $_GET['crf'];
$seriesbottleqty = $_GET['qty5'];
$fruitsoda = $_GET['fs'];
$fruitsodaqty = $_GET['qty6'];
$foods = $_GET['fd'];
$foodsqty = $_GET['qty7'];

 if(mysqli_query($link,"INSERT INTO guestorder(cbf, cbfqty, crf, crfqty, ic, icqty, hd, hdqty, sm, smqty, sb, sbqty, fs, fsqty, fd, fdqty) VALUES 
 ('$coffeebased, $coffeebasedqty, $creambased, $creambasedqty, $icedcoffee, $icedcoffeeqty, $hotdrinks, $hotdrinksqty, $smoothies, $smoothiesqty, $seriesbottle, $seriesbottleqty, $fruitsoda, $fruitsodaqty, $foods, $foodsqty')"))
   {
  
		   
	      echo " window.alert('Record Added Succesfully')";


   } 
  else{
      echo "ERROR: Could not able to execute";  
  }
}
?>