<?php
/**
 * Created by PhpStorm.
 * User: root
 * Date: 2017/9/1
 * Time: 15:52
 */
//返回当前环境域名
function envDomain($v='') {
//	$environment = request()->header('ENVIRONMENT');
    $environment = isset($_SERVER['HTTP_ENVIRONMENT']) ? $_SERVER['HTTP_ENVIRONMENT'] : '';
    $main_domain = env('MAIN_DOMAIN', 'lpg.com');
    $domain = (!empty($v) ? "{$v}." : '')  . (!empty($environment) ? "{$environment}." : '') . $main_domain;
    return $domain;
}