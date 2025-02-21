<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('assignments', function (Blueprint $table) {
            $table->id();
            $table->foreignId('module_id')->constrained('modules')->onDelete('cascade'); // module id
            $table->foreignId('group_id')->constrained('groups')->onDelete('cascade'); // group id
            $table->foreignId('instructor_id')->constrained('instructors')->onDelete('cascade'); // instructor id
            $table->float('total_hrs_completed'); // total hours of the module
            $table->float('online_hrs_completed'); // online hours of the module
            $table->float('present_hrs_completed'); // present hours of the module
            $table->boolean('evaluated'); // whether the module exam was done or not
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('assignments');
    }
};
