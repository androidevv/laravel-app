<?php

namespace App\Http\Controllers\admin;

use App\Category;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class CategoriesController extends Controller
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
        $data['page_title'] = 'category';
        $data['categories'] = Category::orderBy('name' , 'asc')->paginate(10);
        //var_dump($categories); die;
        return view('admin.categories.index' ,$data);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $data['page_title'] = 'category';
        return view('admin.categories.create' , $data);
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

        $category = new Category;

        if ($request->hasFile('file')) {

            $file                = $request->file('file');
            $file_name_with_ext  = $file->getClientOriginalName();
            $file_name           = pathinfo($file_name_with_ext , PATHINFO_FILENAME);
            $extension           = $file->getClientOriginalExtension();
            $fileNameToStore     = $file_name . '_' .time() . '.' . $extension;

            $file->storeAs('category' , $fileNameToStore);
            //$file->move($destinationPath, $file_name);
        }
        else{
            $fileNameToStore = 'no_image.png';
        }

        $category->name        = $request->input('name');
        $category->description = $request->input('description');
        $category->is_enabled  = $request->input('is_enabled');
        $category->file        = $fileNameToStore;

        //$brand->is_enabled = auth()->user()->id;
        $category->Save();

        return redirect(url('admin/categories'));
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
        $data['page_title'] = 'category';
        $data['category']     = Category::find($id);
        return view('admin.categories.edit' , $data);
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

        $category = new Category;

        if ($request->hasFile('file')) {

            $file                = $request->file('file');
            $file_name_with_ext  = $file->getClientOriginalName();
            $file_name           = pathinfo($file_name_with_ext , PATHINFO_FILENAME);
            $extension           = $file->getClientOriginalExtension();
            $fileNameToStore     = $file_name . '_' .time() . '.' . $extension;

            $file->storeAs('category' , $fileNameToStore);
            //$file->move($destinationPath, $file_name);
        }
        else{
            $fileNameToStore = $request->input('prev_file');
        }

        $category = Category::find($id);
        $category->name        = $request->input('name');
        $category->description = $request->input('description');
        $category->is_enabled  = $request->input('is_enabled');
        $category->file        = $fileNameToStore;

        //$brand->is_enabled = auth()->user()->id;
        $category->Save();

        return redirect(url('admin/categories'));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $category = Category::find($id);
        $category->delete();
        return redirect(url('admin/categories'));
    }
}
