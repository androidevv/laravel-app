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




// Customer routes

Route::post('home_ajax', ['uses' => 'Home@index', 'as' => 'home_ajax']);
Route::get('/home1', ['uses'=>'Home@index1', 'as' =>'/home1']);
Route::get('/carlist' , ['uses'=>'Home@car_list', 'as' =>'/carlist']);
//Route::post('carlist' , ['uses'=>'Home@car_list', 'as' =>'carlist']);
Route::post('carlist_search', ['uses' => 'Home@car_list', 'as' => 'carlist_search']);
//Route::get('/carlist_search', ['uses' => 'Home@car_list', 'as' => '/carlist_search']);
Route::post('checkout', ['uses' => 'Home@checkout', 'as' => 'checkout']);
Route::get('/cardetail/{id}' , ['uses'=>'Home@car_detail', 'as' =>'/cardetail']);
Route::post('/cardetail' , ['uses'=>'Home@car_detail', 'as' =>'/cardetail']);
Route::get('/blank/{slug}' , ['uses'=>'Home@blank', 'as' =>'/blank']);

Route::post('callRequestEmail', ['uses' => 'EmailsController@callRequest', 'as' => 'callRequestEmail']);
Route::post('sendInquiry', ['uses' => 'EmailsController@sendInquiry', 'as' => 'sendInquiry']);
Route::post('booking', ['uses' => 'EmailsController@carBooking', 'as' => 'booking']);
Route::post('carInquiry', ['uses' => 'EmailsController@aboutUsForm', 'as' => 'carInquiry']);
Route::post('contactUsForm', ['uses' => 'EmailsController@contactUsForm', 'as' => 'contactUsForm']);
Route::post('getInTouch', ['uses' => 'EmailsController@getInTouch', 'as' => 'getInTouch']);


Route::get('/aboutus' , ['uses'=>'Home@about_us', 'as' =>'/aboutus']);
Route::get('/blogs' , ['uses'=>'Home@blogs', 'as' =>'/blogs']);
Route::get('/blog/{slug}' , ['uses'=>'Home@blog', 'as' =>'/blog']);
Route::get('/contact' , ['uses'=>'Home@contact', 'as' =>'/contact']);

//Admin Routes
Route::resource('admin/brands', 'admin\BrandsController');
Route::resource('admin/categories', 'admin\CategoriesController');
Route::resource('admin/cars', 'admin\CarsController');
Route::resource('admin/seo_panel', 'admin\SeoController');
Route::resource('admin/blank_pages', 'admin\BlankPageController');
Route::resource('admin/blogs', 'admin\BlogsController');
Route::resource('admin/CustomCodes', 'admin\CustomCodeController');

Route::get('wellcome', 'PagesController@index');

Route::resource('posts', 'PostsController');

Route::get('customers/customr/list', [
    'uses' => 'TestController@test',
    'as' => 'customers'
]);

Route::post('umair', [
    'uses' => 'TestController@formSubmit',
    'as' => 'umair'
]);

// Route::get('umair', [
// 	'use' => 'TestController@test',
// 	'as'  => 'umair'
// ]);
Auth::routes();

Route::get('/dashboard', 'DashboardController@index')->name('home');
Route::get('/{slug?}', ['uses'=>'Home@index', 'as' =>'/']);
