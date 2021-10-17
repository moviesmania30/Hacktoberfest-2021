<?php
function selectionSort(&$a) {
	$n = count($a);
	for ($i = 0; $i < ($n - 1); $i++) {
		$key = $i;
		for ($j = ($i + 1); $j < $n; $j++) {
			if ($a[$j] < $a[$key]) $key = $j;
		}
		if ($key != $i) {
			list($a[$key], $a[$i]) = array($a[$i], $a[$key]);
		}
	}
}
?>