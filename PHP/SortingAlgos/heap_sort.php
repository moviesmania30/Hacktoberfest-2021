<?php
function heapSort(&$a) {
	$n = count($a);
	heapMake($a);
	while ($n > 0) {
		list($a[0], $a[$n - 1]) = array($a[$n - 1], $a[0]);
		$n--;
		heapify($a, 0, $n);
	}
}

function heapMake(&$a) {
	$n = count($a);
	for ($i = ($n - 1); $i >= 0; $i--) {
		heapify($a, $i, $n);
	}
}

function heapify(&$a, $pos, $n) {
	while (2 * $pos + 1 < $n) {
		$t = 2 * $pos +1;
		if (2 * $pos + 2 < $n && $a[2 * $pos + 2] >= $a[$t]) {
			$t = 2 * $pos + 2;
		}
		if ($a[$pos] < $a[$t]) {
			list($a[$pos], $a[$t]) = array($a[$t], $a[$pos]);
			$pos = $t;
		}
		else break;
	}
}
?>