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
        Schema::create('usuario', function (Blueprint $table) {
            $table->id('COD_usuario');
            $table->string('Nombre_ingreso_usuario', 10);
            $table->string('contraseña_usuario', 10);
            $table->string('correo_electronico', 10)->nullable();
            $table->unsignedBigInteger('COD_rol');

            $table->foreign('COD_rol')->references('COD_rol')->on('rol');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('usuario');
    }
};
