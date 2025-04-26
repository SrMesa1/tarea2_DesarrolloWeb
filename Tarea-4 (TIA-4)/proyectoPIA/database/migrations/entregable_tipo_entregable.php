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
        Schema::create('entregable_tipo_entregable', function (Blueprint $table) {
            $table->unsignedBigInteger('COD_entregable');
            $table->unsignedBigInteger('COD_tipoentregable');

            $table->primary(['COD_entregable', 'COD_tipoentregable']);

            $table->foreign('COD_entregable')->references('COD_entregable')->on('entregable');
            $table->foreign('COD_tipoentregable')->references('COD_tipoentregable')->on('tipo_entregable');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('entregable_tipo_entregable');
    }
};
