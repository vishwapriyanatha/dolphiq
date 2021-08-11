<?php

use Illuminate\Support\Facades\Route;

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
    return redirect()->intended('login');
});
Auth::routes();
Route::group(['middleware' => ['auth']],
    function () {
        // Logout
        Route::get('logout', 'V1\IndexController@logout')->name('force.logout');
        Route::post('logout', 'Auth\LoginController@logout')->name('logout');

        Route::get('/home', 'V1\HomeController@index')->name('home');
        Route::get('/user', 'V1\HomeController@getLogUserData')->name('home');

        // Customer
        Route::get('/customer/export', 'V1\CustomerController@customerExport')->name('customer.export');
        Route::post('/customer/import', 'V1\CustomerController@customerImport')->name('customer.import');
        Route::resource('/customer','V1\CustomerController');

    });


