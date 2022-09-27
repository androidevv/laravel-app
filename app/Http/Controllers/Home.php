<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;

class Home extends Controller
{
    public function index(Request $request , $slug=null)
    {
        if($slug)
        {
           $data['page'] = DB::table('blank_pages')->where('slug', $slug)->first();
           return view('blank' , $data);
        }

        $data['categories'] = DB::table('categories')->get();
        $data['seo']        = DB::table('seos')->where('page', 'home')->first();

        if($request->method() == 'POST') {
            $is_ajax     = $request->input('is_ajax');

            if ($is_ajax)
            {
                $data['cars'] = DB::table('cars')
                    ->join('categories', 'categories.category_id', '=', 'cars.category_id')
                    ->join('brands', 'brands.brand_id', '=', 'cars.brand_id')
                    ->take(6)->get(['cars.*' , 'brands.name as brand_name' , 'categories.name as category_name']);

                $data['blogs'] = DB::table('blogs')->orderBy('id', 'DESC')->take(4)->get();

                $returnHTML =  view('home_ajax' , $data )->render();
                return response()->json(array('success' => true, 'html'=>$returnHTML));
            }

        }

        return view('index' , $data);
    }

    public function index1()
    {
        $data['categories'] = DB::table('categories')->get();
$data['seo']        = DB::table('seos')->where('page', 'home')->first();
        $data['cars'] = DB::table('cars')
                ->join('categories', 'categories.category_id', '=', 'cars.category_id')
                ->join('brands', 'brands.brand_id', '=', 'cars.brand_id')
                ->take(4)->get(['cars.*' , 'brands.name as brand_name' , 'categories.name as category_name']);

        return view('index1' , $data);
    }

    public function car_list(Request $request)
    {
        //get categories menu
        $data['categories'] = DB::table('categories')->get();
        $data['brands']     = DB::table('brands')->get();
        $data['seo']        = DB::table('seos')->where('page', 'car_list')->first();

        if($request->method() == 'POST'){
            $startDate   = $data['startDate'] = $request->input('startDate');
            $endDate     = $data['endDate'] = $request->input('endDate');
            $locations   = $data['locations'] = $request->input('locations');
            $category    = $data['car_category'] = $request->input('category');
            $dealofmonth = $request->input('dealofmonth');
            $dealofday   = $request->input('dealofday');
            $cheapestcar = $request->input('cheapestcar');
            $car_lease   = $request->input('car_lease');
            $category_id = $request->input('category_id');
            $is_ajax     = $request->input('is_ajax');
            $brands      = $request->input('brands');
            $text        = $request->input('search');
            //dd($request->all());
            $onload      = $data['on_load'] = $request->input('on_load');

            $query = DB::table('cars');
            $query->join('categories', 'categories.category_id', '=', 'cars.category_id')
                ->join('brands', 'brands.brand_id', '=', 'cars.brand_id');

            if ($category != 0)
            {
                $query->where('categories.category_id', $category);
            }

            if($dealofday)
            {
                $query->where('cars.deal_of_the_day', 1);
            }

            if($dealofmonth)
            {
                $query->where('cars.deal_of_the_month', 1);
            }

            if($cheapestcar)
            {
                $query->where('cars.is_cheapest', 1);
            }

            if($car_lease)
            {
                $query->where('cars.car_lease', 1);
            }

            if($category_id)
            {
                $query->where('categories.category_id', $category_id);
            }

            if ($brands)
            {
                $brands = json_decode($brands);
                $query->whereIn('brands.brand_id', $brands, 'or');
            }
            if ($text)
            {
                $query->where('cars.name', 'like', '%'.$text.'%');
                $query->orWhere('brands.name', 'like', '%'.$text.'%');
            }

            $cars = $query->get(['cars.*' , 'brands.name as brand_name' , 'categories.name as category_name']);
            $data['cars'] = $cars;
            $data['search'] = '';

            if ($is_ajax)
            {
                $returnHTML =  view('carlist_ajax' , $data )->render();
                return response()->json(array('success' => true, 'html'=>$returnHTML));
            }

            $data['search'] = $text;
            return view('car_list' , $data);
        }

        //get cars
        $query = DB::table('cars');
        $query->join('categories', 'categories.category_id', '=', 'cars.category_id')
            ->join('brands', 'brands.brand_id', '=', 'cars.brand_id');
        $cars = $query->get(['cars.*' , 'brands.name as brand_name' , 'categories.name as category_name']);
        $data['cars'] = $cars;

        return view('car_list' , $data);
    }

    public function car_detail(Request $request , $id=null)
    {
        $data['seo']        = DB::table('seos')->where('page', 'car_detail')->first();

        if($request->method() == 'POST') {
            $startDate = $data['startDate'] = $request->input('startDate');
            $endDate   = $data['endDate'] = $request->input('endDate');
            $id        = $data['car_id'] = $request->input('car_id');
            $rent      = $data['rent'] = $request->input('rent');
            $days      = $data['days'] = $request->input('days');
        }

        $data['car'] = DB::table('cars')
                        ->join('categories', 'categories.category_id', '=', 'cars.category_id')
                        ->join('brands', 'brands.brand_id', '=', 'cars.brand_id')
                        ->where('cars.car_id', $id)
                        ->first(['cars.*' , 'brands.name as brand_name' , 'categories.name as category_name']);

        return view('car_detail' , $data);
    }

    public function checkout(Request $request)
    {
        $data['seo'] = DB::table('seos')->where('page', 'checkout')->first();
        $id          = $request->input('car_id');

        $data['car'] = DB::table('cars')
            ->join('categories', 'categories.category_id', '=', 'cars.category_id')
            ->join('brands', 'brands.brand_id', '=', 'cars.brand_id')
            ->where('cars.car_id', $id)
            ->first(['cars.*' , 'brands.name as brand_name' , 'categories.name as category_name']);
        $data['startDate'] = $request->input('startDate');
        $data['endDate'] = $request->input('endDate');

        return view('checkout' , $data);
    }

    public function about_us()
    {
        $data['seo']  = DB::table('seos')->where('page', 'about_us')->first();
        $data['cars'] = DB::table('cars')
            ->join('brands', 'brands.brand_id', '=', 'cars.brand_id')
            ->get(['cars.*' , 'brands.name as brand_name']);
        return view('about_us' , $data);
    }

    public function blogs()
    {
        $data['seo']   = DB::table('seos')->where('page', 'blogs')->first();
        $data['blogs'] = DB::table('blogs')->orderBy('id', 'DESC')->get();

        return view('blogs' , $data);
    }

    public function blog($slug)
    {
        $data['seo']   = DB::table('seos')->where('page', 'blog')->first();
        $data['blog']  = DB::table('blogs')->where('slug', $slug)->first();

        $seo = array();
        $seo['meta_title'] = $data['blog']->meta_title;
        $seo['meta_keywords'] = $data['blog']->meta_keywords;
        $seo['meta_description'] = $data['blog']->meta_description;
        $data['seo']     = (object)$seo;

        $data['related_blogs'] =DB::table('blogs')->where('slug','!=' , $slug)->inRandomOrder()->take(3)->get();

        return view('blog' , $data);
    }

    public function contact()
    {
        $data['seo']   = DB::table('seos')->where('page', 'contact_us')->first();
        return view('contact' , $data);
    }

    public function blank($slug)
    {
        $data['page'] = DB::table('blank_pages')->where('slug', $slug)->first();
        return view('blank' , $data);
    }

}
