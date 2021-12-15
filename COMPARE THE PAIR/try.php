<?php
$salt = "f789bbc328a3d1a3";
$x = 1;
while (True) {
    if (md5($salt . $x) == 0) {
        echo $x; 
        $x++;
    } else {
        $x++;
    }
}
?>