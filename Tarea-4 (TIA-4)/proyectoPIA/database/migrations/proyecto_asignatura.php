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
        Schema::create('proyecto_asignatura', function (Blueprint $table) {
            $table->unsignedBigInteger('COD_asignatura');
            $table->unsignedBigInteger('COD_proyecto');

            $table->primary(['COD_asignatura', 'COD_proyecto']);

            $table->foreign('COD_asignatura')->references('COD_asignatura')->on('asignatura');
            $table->foreign('COD_proyecto')->references('COD_proyecto')->on('proyecto');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('proyecto_asignatura');
    }
};
