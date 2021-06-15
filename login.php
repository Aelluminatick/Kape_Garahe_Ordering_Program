<?php  
session_start(); 
if(isset($_SESSION['admin_sid']) || isset($_SESSION['customer_sid']))
{
	header("location:index.php");
}
else{
?>
<!DOCTYPE html>
<html lang="en" dir="ltr">

  <head>
    <meta charset="utf-8">
    <title></title>
    <link rel="stylesheet" href="CSSImages/style.css">
  </head>
 
  <body>
  <div class="bgimg">
     <img src="CSSImages/kpg.jpg" height = "20%" width = "20%">
	 </div>
<form method="post" action="routers/router.php" class="login-form" id="form">
<div class="login-box">
  <h1>Login</h1>
  </div>
  <div class="login-box2">
  <div class="textbox">
    <i class="fas fa-user"></i>
    <input type="text" name="username" placeholder="Username" required>
  </div>
  

  <div class="textbox">
    <i class="fas fa-lock"></i>
    <input type="password" name="password" placeholder="Password"  required>
  </div>

  <input type="button" onclick = "document.getElementById('form').submit();" class="btn" value = "Sign In">
  <a href="register.php"><input type="button" class="btn" value = "Register"></a>
  <p> Don't Want to Sign In? Click Below!
  <a href="indexGuest.php"><input type="button" class="btn" value = "Guest Checkout"></a>
  </div>
</form>
  </body>
</html>


</body>
</html>
<?php
}
?>