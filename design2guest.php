<?php

if (isset($_GET["Submit"]))
{
	echo " <form action=design2guestcalling.php method=GET>";
	echo '<table align=center border=1 width=30% cellspacing=5 cellpadding=5>';
    echo '<th><h3>Order Summary</h3></th>';
    if (!empty($_GET['cf']))
    {
  
        echo '<table align=center border=1 width=30% cellspacing=5 cellpadding=5>';
        echo '<th align=center width = 100%>Coffee Based Frappe</th>';
		echo '<tr>';
        foreach($_GET['cf'] as $checked)
        {
            echo '<td align=center>'.$checked.'</td>';
        }
        echo '<tr>';
            foreach($_GET['qty'] as $qty)
            {
                echo '<td align=center>'.$qty.'</td>';
            }
			echo '</table>';
    }
    else 
    {
        echo '<p> No Order Selected </p>';
    }
	
	if (!empty($_GET['crf']))
    {
    echo '<table align=center border=1 width=30% cellspacing=5 cellpadding=5>';
         echo '<table align=center border=1 width=30% cellspacing=5 cellpadding=5>';
        echo '<th align=center>Cream Based Frappe</th>';
		echo '<tr>';
        foreach($_GET['crf'] as $checked1)
        {
            echo '<td align=center>'.$checked1.'</td>';
        }
        echo '<tr>';
            foreach($_GET['qty1'] as $qty1)
            {
                echo '<td align=center>'.$qty1.'</td>';
            }
			echo '</table>';
    }
    else 
    {
        echo '<p> No Order Selected </p>';
    }
	
	if (!empty($_GET['ic']))
    {
    echo '<table align=center border=1 width=30% cellspacing=5 cellpadding=5>';
         echo '<table align=center border=1 width=30% cellspacing=5 cellpadding=5>';
        echo '<th align=center>Iced Coffee</th>';
		echo '<tr>';
        foreach($_GET['ic'] as $checked2)
        {
            echo '<td align=center>'.$checked2.'</td>';
        }
        echo '<tr>';
            foreach($_GET['qty2'] as $qty2)
            {
                echo '<td align=center>'.$qty2.'</td>';
            }
			echo '</table>';
    }
    else 
    {
        echo '<p> No Order Selected </p>';
    }
	
	if (!empty($_GET['hd']))
    {
    echo '<table align=center border=1 width=30% cellspacing=5 cellpadding=5>';
         echo '<table align=center border=1 width=30% cellspacing=5 cellpadding=5>';
        echo '<th align=center>Hot Drinks</th>';
		echo '<tr>';
        foreach($_GET['hd'] as $checked3)
        {
            echo '<td align=center>'.$checked3.'</td>';
        }
        echo '<tr>';
            foreach($_GET['qty3'] as $qty3)
            {
                echo '<td align=center>'.$qty3.'</td>';
            }
			echo '</table>';
    }
    else 
    {
        echo '<p> No Order Selected </p>';
    }
	
	if (!empty($_GET["sm"]))
    {
    echo '<table align=center border=1 width=30% cellspacing=5 cellpadding=5>';
         echo '<table align=center border=1 width=30% cellspacing=5 cellpadding=5>';
        echo '<th align=center>Smoothies</th>';
		echo '<tr>';
        foreach($_GET['sm'] as $checked4)
        {
            echo '<td align=center>'.$checked4.'</td>';
        }
        echo '<tr>';
            foreach($_GET['qty4'] as $qty4)
            {
                echo '<td align=center>'.$qty4.'</td>';
            }
			echo '</table>';
    }
    else 
    {
        echo '<p> No Order Selected </p>';
    }

if (!empty($_GET["sb"]))
    {
    echo '<table align=center border=1 width=30% cellspacing=5 cellpadding=5>';
         echo '<table align=center border=1 width=30% cellspacing=5 cellpadding=5>';
        echo '<th align=center>Series Bottle</th>';
		echo '<tr>';
        foreach($_GET['sb'] as $checked5)
        {
            echo '<td align=center>'.$checked5.'</td>';
        }
        echo '<tr>';
            foreach($_GET['qty5'] as $qty5)
            {
                echo '<td align=center>'.$qty5.'</td>';
            }
			echo '</table>';
    }
    else 
    {
        echo '<p> No Order Selected </p>';
    }	
	
	if (!empty($_GET["fs"]))
    {
    echo '<table align=center border=1 width=30% cellspacing=5 cellpadding=5>';
         echo '<table align=center border=1 width=30% cellspacing=5 cellpadding=5>';
        echo '<th align=center>Flavored Soda</th>';
		echo '<tr>';
        foreach($_GET['fs'] as $checked6)
        {
            echo '<td align=center>'.$checked6.'</td>';
        }
        echo '<tr>';
            foreach($_GET['qty6'] as $qty6)
            {
                echo '<td align=center>'.$qty6.'</td>';
            }
			echo '</table>';
    }
    else 
    {
        echo '<p> No Order Selected </p>';
    }	
	
	if (!empty($_GET['fd']))
    {
    echo '<table align=center border=1 width=30% cellspacing=5 cellpadding=5>';
         echo '<table align=center border=1 width=30% cellspacing=5 cellpadding=5>';
        echo '<th align=center>Foods</th>';
		echo '<tr>';
        foreach($_GET['fd'] as $checked7)
        {
            echo '<td align=center>'.$checked7.'</td>';
        }
        echo '<tr>';
            foreach($_GET['qty7'] as $qty7)
            {
                echo '<td align=center>'.$qty7.'</td>';
            }
			echo '</table>';
    }
    else 
    {
        echo '<p> No Order Selected </p>';
    }
	
echo "
<input type = Submit value = Confirm Order name='Confirm'>
</form>";	
	
}


?>