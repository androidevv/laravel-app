<?php

namespace App\Http\Controllers\admin;

use App\Blog;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use DB;

class BlogsController extends Controller
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
        $data['page_title'] = 'blog';
        $data['blogs']      = Blog::orderBy('name' , 'asc')->paginate(10);

        return view('admin.blogs.index' , $data);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $data['page_title']  = 'blog';

        return view('admin.blogs.create' , $data);
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

        $blog                 = new Blog();

        if ($request->hasFile('file')) {

            $file                = $request->file('file');
            $file_name_with_ext  = $file->getClientOriginalName();
            $file_name           = pathinfo($file_name_with_ext , PATHINFO_FILENAME);
            $extension           = $file->getClientOriginalExtension();
            $fileNameToStore     = $file_name . '_' .time() . '.' . $extension;

            $destinationPath     = 'blog';

            $file->storeAs($destinationPath , $fileNameToStore);
            //$file->move($destinationPath, $file_name);
        }
        else{
            $fileNameToStore = 'no_image.jpg';
        }

        $blog->name             = $request->input('name');
        $blog->content          = $request->input('content');
        $blog->meta_title       = $request->input('meta_title');
        $blog->slug             = $request->input('slug');
        $blog->meta_keywords    = $request->input('meta_keywords');
        $blog->meta_description = $request->input('meta_description');
        $blog->is_enabled       = $request->input('is_enabled');
        $blog->file             = $fileNameToStore;
        //$brand->is_enabled = auth()->user()->id;
        $blog->Save();

        return redirect(url('admin/blogs'));
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
        $data['page_title'] = 'blog';

        $data['blog'] = Blog::find($id);
        return view('admin.blogs.edit' , $data);
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


        $blog = Blog::find($id);

        if ($request->hasFile('file')) {

            $file                = $request->file('file');
            $file_name_with_ext  = $file->getClientOriginalName();
            $file_name           = pathinfo($file_name_with_ext , PATHINFO_FILENAME);
            $extension           = $file->getClientOriginalExtension();
            $fileNameToStore     = $file_name . '_' .time() . '.' . $extension;

            $destinationPath     = 'blog';

            $file->storeAs($destinationPath , $fileNameToStore);
            //$file->move($destinationPath, $file_name);
        }
        else{
            $fileNameToStore = $request->input('prev_file');
        }

        $blog->name             = $request->input('name');
        $blog->content          = $request->input('content');
        $blog->meta_title       = $request->input('meta_title');
        $blog->slug             = $request->input('slug');
        $blog->meta_keywords    = $request->input('meta_keywords');
        $blog->meta_description = $request->input('meta_description');
        $blog->is_enabled       = $request->input('is_enabled');
        $blog->file             = $fileNameToStore;

        //$brand->is_enabled = auth()->user()->id;
        $blog->Save();

        return redirect(url('admin/blogs'));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $blog = Blog::find($id);
        $blog->delete();
        return redirect(url('admin/blogs'));
    }
}
