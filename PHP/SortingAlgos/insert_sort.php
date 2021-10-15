<?php
function insertSort(&$a) {
	$n = count($a);
	for ($i = 0; $i < ($n - 1); $i++) {
		$key = $i + 1;
		$tmp = $a[$key];
		for ($j = ($i + 1); $j > 0; $j--) {
			if ($tmp < $a[$j - 1]) {
				$a[$j] = $a[$j - 1];
				$key = $j - 1;
			}
		}
		$a[$key] = $tmp;
	}
}

?>