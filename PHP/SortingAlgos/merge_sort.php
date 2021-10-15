<?php
function mergeSort(&$a, $first = 0, $last = null) {
	if (is_null($last)) $last = count($a) - 1;
	$function = __FUNCTION__;
	if ($first < $last) {
		$function($a, $first, floor(($first + $last) / 2));
		$function($a, floor(($first + $last) / 2) + 1, $last);

		$tmp = array();

		$middle = floor(($first + $last) / 2);
		$start = $first;
		$final = $middle + 1;
		for ($i = $first; $i <= $last; $i++) {
			if (($start <= $middle) && (($final > $last) || ($a[$start] < $a[$final]))) {
				$tmp[$i] = $a[$start];
				$start++;
			} else {
				$tmp[$i] = $a[$final];
				$final++;
			}
		}

		for ($i = $first; $i <= $last; $i++) {
			$a[$i] = $tmp[$i];
		}
	}
}
?>