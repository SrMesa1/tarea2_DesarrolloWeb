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
        Schema::create('programa_academico_asignatura', function (Blueprint $table) {
            $table->unsignedBigInteger('COD_asignatura');
            $table->unsignedBigInteger('COD_programa');

            $table->primary(['COD_asignatura', 'COD_programa']);

            $table->foreign('COD_asignatura')->references('COD_asignatura')->on('asignatura');
            $table->foreign('COD_programa')->references('COD_programa')->on('programa_academico');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('programa_academico_asignatura');
    }
};
