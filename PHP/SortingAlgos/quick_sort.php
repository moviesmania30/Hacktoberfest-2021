<?php
function quickSort($array)
{
 if (!$length = count($array)) {
  return $array;
 }
 
 $k = $array[0];
 $x = $y = array();
 
 for ($i=1;$i<$length;$i++) {
  if ($array[$i] <=$k) {
   $x[] = $array[$i];
  } else {
   $y[] = $array[$i];
  }
 }
 return array_merge(quickSort($x),array($k),quickSort($y));
}

?>