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
        Schema::create('institution_admins', function (Blueprint $table) {
            $table->id(); // db id
            $table->foreignId('institution_id')->constrained('institutions')->onDelete('cascade'); // institution id
            $table->foreignId('user_id')->constrained('users')->onDelete('cascade'); // user id
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('institution_admins');
    }
};
