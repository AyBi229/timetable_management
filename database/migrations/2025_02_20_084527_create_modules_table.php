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
        Schema::create('modules', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('ref'); // reference of the module
            $table->float('total_hours'); // total hours of the module
            $table->float('online_hours'); // online hours of the module
            $table->float('present_hours'); // present hours of the module
            $table->foreignId('group_id')->constrained('groups')->onDelete('cascade'); // group id
            $table->boolean('regional'); // whether the module is regional or local
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('modules');
    }
};
