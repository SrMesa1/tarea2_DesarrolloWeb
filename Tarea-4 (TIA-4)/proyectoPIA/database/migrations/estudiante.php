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
        Schema::create('estudiante', function (Blueprint $table) {
            $table->id('COD_estudiante');
            $table->string('nombre_1', 10);
            $table->string('nombre_2', 10)->nullable();
            $table->string('apellido_1', 10);
            $table->string('apellido_2', 10)->nullable();
            $table->integer('telefono_1');
            $table->integer('telefono_2')->nullable();
            $table->string('correo_electronico', 10)->nullable();
            $table->unsignedBigInteger('COD_programa');
            $table->unsignedBigInteger('COD_Proyecto');
        
            $table->foreign('COD_programa')->references('COD_programa')->on('programa_academico');
            $table->foreign('COD_Proyecto')->references('COD_proyecto')->on('proyecto');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('estudiante');
    }
};
