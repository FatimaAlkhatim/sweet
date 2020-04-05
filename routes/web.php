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
    return view('welcome');
});


Route::get('view', function () {
    return view('view');
});



Route::get('about', function () {
    return view('about');
});



Route::get('contact', function () {
    return view('contact');
});

Route::resource("pages","crudscontroller");


Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');


Route::get('/notify',function (){
    notify()->flash('you have signed in.', 'success');
    return redirect()->to('/');

});

Route::resource('crud','Crudscontroller');



