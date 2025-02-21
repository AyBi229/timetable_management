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
        Schema::create('field_grp_institutions', function (Blueprint $table) {
            $table->id();
            $table->foreignId('field_id')->constrained('fields')->onDelete('cascade'); // field id
            $table->foreignId('group_id')->constrained('groups')->onDelete('cascade'); // group id
            $table->foreignId('institution_id')->constrained('institutions')->onDelete('cascade'); // institution id
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('field_grp_institutions');
    }
};
