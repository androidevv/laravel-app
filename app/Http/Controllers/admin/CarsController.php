<?php

namespace App\Http\Controllers\admin;

use App\Car;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use DB;

class CarsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index()
    {
        $data['page_title'] = 'car';
        $data['cars'] = Car::orderBy('name' , 'asc')->get();
        //var_dump($categories); die;
        return view('admin.cars.index' , $data);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $data['page_title'] = 'car';
        $data['categories'] = DB::table('categories')->get();
        $data['brands']     = DB::table('brands')->get();
        return view('admin.cars.create' , $data);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request , [
            'brand_id'                => 'required',
            'name'                    => 'required',
            'category_id'             => 'required',
            'milage'                  => 'required',
            'excess_claim'            => 'required',
            'deposit'                 => 'required',
            'daily_rent'              => 'required',
            'weekly_rent'             => 'required',
            'monthly_rent'            => 'required',
            'is_enabled'              => 'required',
            'file'                    => 'image|nullable|max:1999'
        ]);

        $car = new Car;

        if ($request->hasFile('file')) {

            $file                = $request->file('file');
            $file_name_with_ext  = $file->getClientOriginalName();
            $file_name           = pathinfo($file_name_with_ext , PATHINFO_FILENAME);
            $extension           = $file->getClientOriginalExtension();
            $fileNameToStore     = $file_name . '_' .time() . '.' . $extension;

            $destinationPath     = 'car';

            $file->storeAs($destinationPath , $fileNameToStore);
            //$file->move($destinationPath, $file_name);
        }
        else{
            $fileNameToStore = 'no_image.jpg';
        }

        $car->name                    = $request->input('name');
        $car->category_id             = $request->input('category_id');
        $car->brand_id                = $request->input('brand_id');
        $car->milage                  = $request->input('milage');
        $car->excess_claim            = $request->input('excess_claim');
        $car->deposit                 = $request->input('deposit');
        $car->bluetooth               = ($request->input('bluetooth')) ? $request->input('bluetooth'): 0;
        $car->free_delivery           = ($request->input('free_delivery')) ? $request->input('free_delivery'): 0;
        $car->free_cancellation       = ($request->input('free_cancellation')) ? $request->input('free_cancellation'): 0;
        $car->comprehensive_insurance = ($request->input('comprehensive_insurance')) ? $request->input('comprehensive_insurance'): 0;
        $car->senitized               = ($request->input('senitized')) ? $request->input('senitized'): 0;
        $car->daily_rent              = $request->input('daily_rent');
        $car->weekly_rent             = $request->input('weekly_rent');
        $car->monthly_rent            = $request->input('monthly_rent');
        $car->description             = $request->input('description');
        $car->meta_title              = $request->input('meta_title');
        $car->meta_keywords           = $request->input('meta_keywords');
        $car->meta_description        = $request->input('meta_description');
        $car->slug                    = $request->input('slug');
        $car->is_enabled              = $request->input('is_enabled');
        $car->file                    = $fileNameToStore;

        //$brand->is_enabled = auth()->user()->id;
        $car->Save();

        return redirect(url('admin/cars'));
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $data['page_title'] = 'car';

        $data['categories'] = DB::table('categories')->get();
        $data['brands']     = DB::table('brands')->get();
        $data['car']        = Car::find($id);

        return view('admin.cars.edit' , $data);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $this->validate($request , [
            'brand_id'                => 'required',
            'name'                    => 'required',
            'category_id'             => 'required',
            'milage'                  => 'required',
            'excess_claim'            => 'required',
            'deposit'                 => 'required',
            'daily_rent'              => 'required',
            'weekly_rent'             => 'required',
            'monthly_rent'            => 'required',
            'is_enabled'              => 'required',
            'file'                    => 'image|nullable|max:1999'
        ]);

        $car = new Car;

        if ($request->hasFile('file')) {

            $file                = $request->file('file');
            $file_name_with_ext  = $file->getClientOriginalName();
            $file_name           = pathinfo($file_name_with_ext , PATHINFO_FILENAME);
            $extension           = $file->getClientOriginalExtension();
            $fileNameToStore     = $file_name . '_' .time() . '.' . $extension;

            $destinationPath     = 'car';

            $file->storeAs($destinationPath , $fileNameToStore);
            //$file->move($destinationPath, $file_name);
        }
        else{
            $fileNameToStore = $request->input('prev_file');
        }

        $car = Car::find($id);
        $car->name                    = $request->input('name');
        $car->category_id             = $request->input('category_id');
        $car->brand_id                = $request->input('brand_id');
        $car->milage                  = $request->input('milage');
        $car->excess_claim            = $request->input('excess_claim');
        $car->deposit                 = $request->input('deposit');
        $car->bluetooth               = ($request->input('bluetooth')) ? $request->input('bluetooth'): 0;
        $car->free_delivery           = ($request->input('free_delivery')) ? $request->input('free_delivery'): 0;
        $car->free_cancellation       = ($request->input('free_cancellation')) ? $request->input('free_cancellation'): 0;
        $car->comprehensive_insurance = ($request->input('comprehensive_insurance')) ? $request->input('comprehensive_insurance'): 0;
        $car->senitized               = ($request->input('senitized')) ? $request->input('senitized'): 0;
        $car->daily_rent              = $request->input('daily_rent');
        $car->weekly_rent             = $request->input('weekly_rent');
        $car->monthly_rent            = $request->input('monthly_rent');
        $car->description             = $request->input('description');
        $car->meta_title              = $request->input('meta_title');
        $car->meta_keywords           = $request->input('meta_keywords');
        $car->meta_description        = $request->input('meta_description');
        $car->slug                    = $request->input('slug');
        $car->is_enabled              = $request->input('is_enabled');
        $car->file                    = $fileNameToStore;

        //$brand->is_enabled = auth()->user()->id;
        $car->Save();

        return redirect(url('admin/cars'));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $car = Car::find($id);
        $car->delete();
        return redirect(url('admin/cars'));
    }
}
