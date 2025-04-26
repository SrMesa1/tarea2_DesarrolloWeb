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
        Schema::create('entregable', function (Blueprint $table) {
            $table->id('COD_entregable');
            $table->string('nombre_entregable', 10);
            $table->string('descripcion_entregable', 10);
            $table->unsignedBigInteger('COD_proyecto');

    $table->foreign('COD_proyecto')->references('COD_proyecto')->on('proyecto');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('entregable');
    }
};
