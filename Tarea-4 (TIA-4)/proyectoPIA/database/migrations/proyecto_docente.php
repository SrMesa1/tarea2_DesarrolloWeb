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
        Schema::create('proyecto_docente', function (Blueprint $table) {
            $table->unsignedBigInteger('COD_proyecto');
            $table->unsignedBigInteger('COD_docente');

            $table->primary(['COD_proyecto', 'COD_docente']);

            $table->foreign('COD_proyecto')->references('COD_proyecto')->on('proyecto');
            $table->foreign('COD_docente')->references('COD_docente')->on('docente');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('proyecto_docente');
    }
};
