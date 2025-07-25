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
        Schema::create('regional_admins', function (Blueprint $table) {
            $table->id(); // db id
            $table->foreignId('user_id')->constrained('users')->onDelete('cascade'); // user id
            $table->foreignId('regional_office_id')->constrained('regional_offices')->onDelete('cascade'); // regional office id
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('regional_admin');
    }
};
