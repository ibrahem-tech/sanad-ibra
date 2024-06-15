<?php
require('wp-load.php' );
if ( is_user_logged_in() ) {
    $url = 'https://stageapi-v2.madrewards.com/usr/l';
            $headers = array(
                'Content-Type' => 'application/json',
                'x-api-key' => '6cjXkto0ET6OfDlnywHBz8x3e5Ywz8iA4Gp2u2x4'
            );
            $body = json_encode(array(
                'email' => wp_get_current_user()->user_email,
                'firstName' => 'John',
                'lastName' => 'doe',
                'region' => 'ae',
                'language' => 'en',
                'partnerId' => 12,
                'mobile' => '+2767638311',
                'loyalityId' => get_current_user_id()
));

            $response = wp_remote_post($url, array(
                'headers' => $headers,
                'body' => $body
            ));
            $error_message = "";
            if (is_wp_error($response)) {
                $error_message = $response->get_error_message();
            } else {
                $response_code = wp_remote_retrieve_response_code($response);
                if ($response_code == 200) {
                    $body = wp_remote_retrieve_body($response);
                    $data = json_decode($body, true);
                    $token = $data['token'];
                    $saversClubUrl = "https://sempsunai.stage.savers.club/us/en?lh=" . $token;
                    wp_redirect($saversClubUrl);
                    exit;
                } else {
                    echo $error_message;
                    exit;
                }
            }
}
else{
    echo "User not logged in!";
    exit;
}