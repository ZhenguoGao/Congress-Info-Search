<?php
	date_default_timezone_set('America/Los_Angeles');
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');
    if(isset($_GET['symbol'])) {
		$url = 'http://congress.api.sunlightfoundation.com/legislators?apikey=25ba21857897481f90b998fdcecdcb24&per_page=all';
		$resp = file_get_contents($url);
        
		echo $resp;
    };
    if(isset($_GET['symbol1'])) {
		$url = 'http://congress.api.sunlightfoundation.com/bills?apikey=25ba21857897481f90b998fdcecdcb24&history.active=true&per_page=50';
		$resp = file_get_contents($url);
		echo $resp;
    };
    if(isset($_GET['symbol5'])) {
		$url = 'http://congress.api.sunlightfoundation.com/bills?apikey=25ba21857897481f90b998fdcecdcb24&history.active=false&per_page=50';
		$resp = file_get_contents($url);
		echo $resp;
    };
    if(isset($_GET['symbol2'])) {
		$url = 'https://congress.api.sunlightfoundation.com/committees?apikey=25ba21857897481f90b998fdcecdcb24&per_page=all';
		$resp = file_get_contents($url);
		echo $resp;
    };
    if(isset($_GET['symbol3'])) {
		$url = 'https://congress.api.sunlightfoundation.com/committees?apikey=25ba21857897481f90b998fdcecdcb24&member_ids='.urlencode($_GET['member_ids']).'&per_page=5';
		$resp = file_get_contents($url);
		echo $resp;
    };
    if(isset($_GET['symbol4'])) {
		$url = 'https://congress.api.sunlightfoundation.com/bills?apikey=25ba21857897481f90b998fdcecdcb24&sponsor_id='.urlencode($_GET['sponsor_id']).'&per_page=5';
		$resp = file_get_contents($url);
		echo $resp;
    };
    

    
//if(isset($_GET['firstname'])) {
//		$url = 'http://congress.api.sunlightfoundation.com/legislators?state='.urlencode(state_to_ab($_GET['firstname'])).'&apikey='.urlencode("25ba21857897481f90b998fdcecdcb24");
//		$resp = file_get_contents($url);
//        $json = json_decode($resp);
//		echo $json;
//	}

     function state_to_ab( $code ){
                        //    $code = strtoupper($code);
                            $state = '';
                            if( $code == 'Alabama' ) $state = 'AL';
                            if( $code == 'Alaska' ) $state = 'AK';
                            if( $code == 'Arizona' ) $state = 'AZ';
                             if( $code == 'Arkansas' ) $state = 'AR';
                             if( $code == 'California' ) $state = 'CA';
                             if( $code == 'Colorado' ) $state = 'CO';
                             if( $code == 'Connecticut' ) $state = 'CT';
                             if( $code == 'Delaware' ) $state = 'DE';
                             if( $code == 'Florida' ) $state = 'FL';
                             if( $code == 'Georgia' ) $state = 'GA';
                             if( $code == 'Hawaii' ) $state = 'HI';
                             if( $code == 'Idaho' ) $state = 'ID';
                             if( $code == 'Illinois' ) $state = 'IL';
                             if( $code == 'Indiana' ) $state = 'IN';
                             if( $code == 'Iowa' ) $state = 'IA';
                             if( $code == 'Kansas' ) $state = 'KS';
                             if( $code == 'Kentucky' ) $state = 'KY';
                             if( $code == 'Louisiana' ) $state = 'LA';
                             if( $code == 'Maine' ) $state = 'ME';
                             if( $code == 'Maryland' ) $state = 'MD';
                             if( $code == 'Massachusetts' ) $state = 'MA';
                             if( $code == 'Michigan' ) $state = 'MI';
                             if( $code == 'Minnesota' ) $state = 'MN';
                             if( $code == 'Mississippi' ) $state = 'MS';
                             if( $code == 'Missouri' ) $state = 'MO';
                             if( $code == 'Montana' ) $state = 'MT';
                             if( $code == 'Nebraska' ) $state = 'NE';
                             if( $code == 'Nevada' ) $state = 'NV';
                             if( $code == 'New Hampshire' ) $state = 'NH';
                             if( $code == 'New Jersey' ) $state = 'NJ';
                             if( $code == 'New Mexico' ) $state = 'NM';
                             if( $code == 'New York' ) $state = 'NY';
                             if( $code == 'North Carolina' ) $state = 'NC';
                             if( $code == 'North Dakota' ) $state = 'ND';
                             if( $code == 'Ohio' ) $state = 'OH';
                             if( $code == 'Oklahoma' ) $state = 'OK';
                             if( $code == 'Oregon' ) $state = 'OR';
                             if( $code == 'Pennsylvania' ) $state = 'PA';
                             if( $code == 'Rhode Island' ) $state = 'RI';
                             if( $code == 'South Carolina' ) $state = 'SC';
                             if( $code == 'South Dakota' ) $state = 'SD';
                             if( $code == 'Tennessee' ) $state = 'TN';
                             if( $code == 'Texas' ) $state = 'TX';
                             if( $code == 'Utah' ) $state = 'UT';
                             if( $code == 'Vermont' ) $state = 'VT';
                             if( $code == 'Virginia' ) $state = 'VA';
                             if( $code == 'Washington' ) $state = 'WA';
                             if( $code == 'West Virginia' ) $state = 'WV';
                             if( $code == 'Wisconsin' ) $state = 'WI';
                             if( $code == 'Wyoming' ) $state = 'WY';

                            return $state;
                        }

?>