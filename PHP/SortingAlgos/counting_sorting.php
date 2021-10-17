<?php
function countingSort(&$a) {
	$k = max($a);
	$c = array();
	$n = count($a);
	for ($i = 0; $i <= $k; $i++)
		$c[$i] = 0;
	for ($i = 0;$i < $n; $i++) {
		$c[$a[$i]]++;
	}
	$b = 0;
	for ($j = 0;$j <= $k; $j++) {
		for ($i = 0; $i < $c[$j]; $i++) {
			$a[$b] = $j;
			$b++;
		}
	}
}
?>