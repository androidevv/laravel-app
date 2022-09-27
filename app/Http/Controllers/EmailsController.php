<?php

namespace App\Http\Controllers;

use Mail;
use App\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use DB;
use App\CallRequest;
use App\CarInquiry;
use App\CarBooking;
use App\AboutUsForm;
use App\ContactUsForm;
use App\GetInTouch;

class EmailsController extends Controller
{
    public function callRequest(Request $request)
    {
        $this->validate($request , [
            'phone'       => 'required',
            'comments'    => 'required'
        ]);

        $callRequest = new CallRequest;

        $callRequest->phone   = $request->input('phone');
        $callRequest->message = $request->input('comments');
        $callRequest->Save();

        $template = DB::table('email_template')->where('email_type', $request->input('action'))->first();
        $message  = str_replace('{cs_num}' , $request->input('phone') , $template->body);
        $message  = str_replace('{cs_msg}' , $request->input('comments') , $message);

        $data = [
            'email' => $template->from_email,
            'name'  => $template->from_name,
            'subject'    => $template->subject,
            'body'       => $message
        ];

        $this->mail_to_admin($data , $message);

        return redirect()->route('/');
    }

    public function sendInquiry(Request $request)
    {
        $this->validate($request , [
            'name'       => 'required',
            'email'    => 'required'
        ]);

        $carInquiry = new CarInquiry;

        $carInquiry->car_id       = $request->input('car_id');
        $carInquiry->car_name     = $request->input('company') . ' ' .$request->input('car');
        $carInquiry->name         = $request->input('name');
        $carInquiry->email        = $request->input('email');
        $carInquiry->phone_number = $request->input('phone_number');
        $carInquiry->from_date    = $request->input('date1');
        $carInquiry->to_date      = $request->input('date2');
        $carInquiry->duration     = $request->input('duration');
        $carInquiry->amount       = $request->input('amount');
        $carInquiry->Save();

        $template = DB::table('email_template')->where('email_type', 'car_inquiry_for_admin')->first();

        $message  = str_replace('{cs_name}' , $request->input('name') , $template->body);
        $message  = str_replace('{cs_num}' , $request->input('phone_number') , $message);
        $message  = str_replace('{cs_email}' , $request->input('email') , $message);
        $message  = str_replace('{cs_from}' , $request->input('date1') , $message);
        $message  = str_replace('{cs_to}' , $request->input('date2') , $message);
        $message  = str_replace('{cs_car}' ,  $request->input('company') . ' ' .$request->input('car') , $message);

        $data = [
            'email' => $template->from_email,
            'name'  => $template->from_name,
            'subject'    => $template->subject,
            'body'       => $message
        ];

        $this->mail_to_admin($data , $message);

        return redirect()->route('/');
    }

    public function carBooking(Request $request)
    {
        $this->validate($request , [
            'name'       => 'required',
            'email'    => 'required'
        ]);

        $carBooking = new CarBooking;

        $carBooking->car_id                   = $request->input('carid');
        $carBooking->car_name                 = $request->input('company') . ' ' .$request->input('car_name');
        $carBooking->name                     = $request->input('name');
        $carBooking->email                    = $request->input('email');
        $carBooking->phone_number             = $request->input('number');
        $carBooking->from_date                = $request->input('start_date');
        $carBooking->to_date                  = $request->input('end_date');
        $carBooking->duration                 = $request->input('duration');
        $carBooking->rentalAmount             = $request->input('rentalAmount');
        $carBooking->vat_amount               = $request->input('vat_amount');
        $carBooking->totalAmount              = $request->input('totalAmount');
        $carBooking->delivery_charge          = $request->input('delivery_charge');
        $carBooking->pickup_charge            = $request->input('pickup_charge');
        $carBooking->supercdw_charge          = $request->input('supercdw_charge');
        $carBooking->additional_driver_charge = $request->input('additional_driver_charge');
        $carBooking->city                     = $request->input('city');
        $carBooking->country                  = $request->input('country');
        $carBooking->Save();

        $template = DB::table('email_template')->where('email_type', 'booking_success_for_admin')->first();

        $message  = str_replace('{cs_name}' , $request->input('name') , $template->body);
        $message  = str_replace('{cs_num}' , $request->input('number') , $message);
        $message  = str_replace('{cs_email}' , $request->input('email') , $message);
        $message  = str_replace('{st_date}' , $request->input('start_date') , $message);
        $message  = str_replace('{en_date}' , $request->input('end_date') , $message);
        $message  = str_replace('{total}' ,  $request->input('totalAmount') , $message);

        $data = [
            'email' => $template->from_email,
            'name'  => $template->from_name,
            'subject'    => $template->subject,
            'body'       => $message
        ];

        $this->mail_to_admin($data , $message);

        return redirect()->route('/');
    }

    public function aboutUsForm(Request $request)
    {
        $this->validate($request , [
            'first_name'       => 'required',
            'email'    => 'required'
        ]);

        $aboutUs  = new AboutUsForm;

        $aboutUs->name        = $request->input('first_name') . ' ' . $request->input('last_name');
        $aboutUs->email       = $request->input('email') . ' ' .$request->input('car_name');
        $aboutUs->mobile      = $request->input('mobile');
        $aboutUs->pick_date   = $request->input('startDate');
        $aboutUs->return_date = $request->input('endDate');
        $aboutUs->vehicle     = $request->input('vehicle');
        $aboutUs->message     = $request->input('message');

        $aboutUs->Save();

        $template = DB::table('email_template')->where('email_type', 'car_inquiry_for_admin')->first();

        $message  = str_replace('{cs_name}' , $request->input('first_name') . ' ' . $request->input('last_name') , $template->body);
        $message  = str_replace('{cs_num}' , $request->input('mobile') , $message);
        $message  = str_replace('{cs_email}' , $request->input('email') , $message);
        $message  = str_replace('{cs_from}' , $request->input('startDate') , $message);
        $message  = str_replace('{cs_to}' , $request->input('startDate') , $message);
        $message  = str_replace('{cs_car}' ,  $request->input('vehicle') , $message );

        $data = [
            'email' => $template->from_email,
            'name'  => $template->from_name,
            'subject'    => $template->subject,
            'body'       => $message
        ];

        $this->mail_to_admin($data , $message);

        return redirect()->route('/');
    }

    public function contactUsForm(Request $request)
    {
        $this->validate($request , [
            'name'       => 'required',
            'phone'    => 'required'
        ]);

        $contactUsForm  = new ContactUsForm;

        if ($request->hasFile('file')) {

            $file                = $request->file('booking_attachment');
            $file_name_with_ext  = $file->getClientOriginalName();
            $file_name           = pathinfo($file_name_with_ext , PATHINFO_FILENAME);
            $extension           = $file->getClientOriginalExtension();
            $fileNameToStore     = $file_name . '_' .time() . '.' . $extension;

            $destinationPath     = 'contact_us';

            $file->storeAs($destinationPath , $fileNameToStore);
            //$file->move($destinationPath, $file_name);
        }
        else{
            $fileNameToStore = 'no_image.jpg';
        }
        $contactUsForm->name        = $request->input('name');
        $contactUsForm->phone       = $request->input('phone');
        $contactUsForm->attachment  = $fileNameToStore;
        $contactUsForm->message     =  $request->input('message');

        $contactUsForm->Save();

        $template = DB::table('email_template')->where('email_type', 'contact_us_page_for_admin')->first();

        $message  = str_replace('{cs_name}' , $request->input('name') , $template->body);
        $message  = str_replace('{cs_num}' , $request->input('phone') , $message);
        $message  = str_replace('{cs_email}' , $request->input('email') , $message);
        $message  = str_replace('{cs_msg}' , $request->input('message') , $message);

        $data = [
            'email' => $template->from_email,
            'name'  => $template->from_name,
            'subject'    => $template->subject,
            'body'       => $message
        ];

        $this->mail_to_admin($data , $message);

        return redirect()->route('/');
    }

    public function getInTouch(Request $request)
    {
        $this->validate($request , [
            'name'       => 'required',
            'email'    => 'required'
        ]);

        $getInTouch  = new GetInTouch;


        $getInTouch->name        = $request->input('name');
        $getInTouch->email       = $request->input('email');
        $getInTouch->message     =  $request->input('message');

        $getInTouch->Save();

        $template = DB::table('email_template')->where('email_type', 'contact_us_inc_for_admin')->first();

        $message  = str_replace('{cs_name}' , $request->input('name') , $template->body);
        $message  = str_replace('{cs_email}' , $request->input('email') , $message);
        $message  = str_replace('{cs_msg}' , $request->input('message') , $message);

        $data = [
            'email' => $template->from_email,
            'name'  => $template->from_name,
            'subject'    => $template->subject,
            'body'       => $message
        ];

        $this->mail_to_admin($data , $message);

        return redirect()->route('/');
    }

    function mail_to_admin($data , $message)
    {

        Mail::send([], $data, function($message) use ($data)
        {
            $message->from($data['email'] , $data['name']);
            //$message->to('shahbaz@kohistanlogistics.com','Shahbaz');
            $message->to('info@kohistanrentacar.com','Umar');
            $message->subject($data['subject']);
            $message->setBody($data['body'] , 'text/html');
        });

    }

}
