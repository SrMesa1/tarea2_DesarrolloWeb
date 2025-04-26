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
        Schema::create('tipo_entregable', function (Blueprint $table) {
            $table->id('COD_tipoentregable');
            $table->string('nombre_tipo_entregable', 10);
            $table->string('descripcion_tipo_entregable', 10);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tipo_entregable');
    }
};
