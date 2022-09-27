<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCarsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cars', function (Blueprint $table) {
            $table->bigIncrements('car_id');
            $table->integer('category_id');
            $table->integer('brand_id');
            $table->string('name');
            $table->longText('description');
            $table->integer('quantity');
            $table->longText('video_link');
            $table->integer('rent_per_day');
            $table->integer('rent_per_week');
            $table->tinyInteger('is_featuured');
            $table->tinyInteger('is_cheapest');
            $table->tinyInteger('deal_of_the_day');
            $table->tinyInteger('deal_of_the_month');
            $table->tinyInteger('deal_of_the_rating');
            $table->tinyInteger('status');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('cars');
    }
}
