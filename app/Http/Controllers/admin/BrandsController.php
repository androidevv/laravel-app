<?php

namespace App\Http\Controllers\admin;

use App\Brand;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class BrandsController extends Controller
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
        $data['page_title'] = 'brand';
        $data['brands']     = Brand::orderBy('name' , 'asc')->paginate(10);
        //var_dump($categories); die;
        return view('admin.brands.index' , $data);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $data['page_title'] = 'brand';
        return view('admin.brands.create' , $data);
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
            'name'       => 'required',
            'is_enabled' => 'required',
            'file'       => 'image|nullable|max:1999'
        ]);

        $brand              = new Brand;

        if ($request->hasFile('file')) {

            $file                = $request->file('file');
            $file_name_with_ext  = $file->getClientOriginalName();
            $file_name           = pathinfo($file_name_with_ext , PATHINFO_FILENAME);
            $extension           = $file->getClientOriginalExtension();
            $fileNameToStore     = $file_name . '_' .time() . '.' . $extension;

            $destinationPath     = 'brand';

            $file->storeAs($destinationPath , $fileNameToStore);
            //$file->move($destinationPath, $file_name);
        }
        else{
            $fileNameToStore = 'no_image.jpg';
        }

        $brand->name        = $request->input('name');
        $brand->description = $request->input('description');
        $brand->is_enabled  = $request->input('is_enabled');
        $brand->file        = $fileNameToStore;

        //$brand->is_enabled = auth()->user()->id;
        $brand->Save();

        return redirect(url('admin/brands'));
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
        $data['page_title'] = 'brand';
        $data['brand']     = Brand::find($id);
        return view('admin.brands.edit' , $data);
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
            'name'       => 'required',
            'is_enabled' => 'required',
            'file'       => 'image|nullable|max:1999'
        ]);

        if ($request->hasFile('file')) {

            $file                = $request->file('file');
            $file_name_with_ext  = $file->getClientOriginalName();
            $file_name           = pathinfo($file_name_with_ext , PATHINFO_FILENAME);
            $extension           = $file->getClientOriginalExtension();
            $fileNameToStore     = $file_name . '_' .time() . '.' . $extension;

            $destinationPath     = 'brand';

            $file->storeAs($destinationPath , $fileNameToStore);
            //$file->move($destinationPath, $file_name);
        }
        else{
            $fileNameToStore = $request->input('prev_file');
        }

        $brand = Brand::find($id);
        $brand->name        = $request->input('name');
        $brand->description = $request->input('description');
        $brand->is_enabled  = $request->input('is_enabled');
        $brand->file        = $fileNameToStore;

        //$brand->is_enabled = auth()->user()->id;
        $brand->Save();

        return redirect(url('admin/brands'));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $brand = Brand::find($id);
        $brand->delete();
        return redirect(url('admin/brands'));
    }
}
