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
        Schema::create('proyecto', function (Blueprint $table) {
            $table->id('COD_proyecto');
            $table->string('titulo_del_proyecto', 10);
            $table->string('objetivo_proyecto', 10);
            $table->string('orientacion_del_proyecto', 10);
            $table->unsignedBigInteger('COD_tipo_proyecto');
            $table->integer('fecha_inicio_proyecto');
            $table->integer('fecha_fin_proyecto');
        
            $table->foreign('COD_tipo_proyecto')->references('COD_tipo_proyecto')->on('_tipo__proyecto');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('proyecto');
    }
};
