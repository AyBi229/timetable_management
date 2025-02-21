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
        Schema::create('class_sessions', function (Blueprint $table) {
            $table->id();
            $table->foreignId('assignment_id')->constrained('assignments')->cascadeOnDelete(); // assignment_id
            $table->string('classroom'); // the classroom name
            $table->boolean('exam')->default(false); // if the class_sessions was an exam or not
            $table->float('period'); // the period of the session in hours
            $table->date('date'); // the date of the session
            $table->time('start'); // the start time of the session
            $table->time('end'); // the end time of the session
            $table->foreignId('timetable_id')->constrained('timetables')->onDelete('cascade'); // timetable id
            $table->boolean('achieved')->default(false); // if the session is active or not
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('class_sessions');
    }
};
