<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('dt/index');
});

//namespace命名空间，middleware中间件，domain子域名路由, as路由名称
Route::group(['namespace' => 'Api', 'domain' => envDomain('api'), 'as' => 'api.'],function (){
    Route::group(['namespace' => 'v1', 'prefix' => 'v1'], function(){
        //Auth
        Route::get('auth/register','AuthController@register');
    });
});
