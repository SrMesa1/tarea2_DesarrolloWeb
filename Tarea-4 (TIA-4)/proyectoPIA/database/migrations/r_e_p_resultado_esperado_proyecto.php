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
        Schema::create('_r_e_p_resultado_esperado_proyecto', function (Blueprint $table) {
            $table->id('COD_REP');
            $table->string('Descripcion', 10);
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
        Schema::dropIfExists('_r_e_p_resultado_esperado_proyecto');
    }
};
