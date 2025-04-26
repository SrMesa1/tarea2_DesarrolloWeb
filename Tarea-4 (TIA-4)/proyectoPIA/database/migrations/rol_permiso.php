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
        Schema::create('rol_permiso', function (Blueprint $table) {
            $table->string('COD_permisos', 10);
            $table->unsignedBigInteger('COD_permiso');
            $table->unsignedBigInteger('COD_rol');
        
            $table->primary(['COD_rol', 'COD_permiso']);
        
            $table->foreign('COD_rol')->references('COD_rol')->on('rol');
            $table->foreign('COD_permiso')->references('COD_permiso')->on('permiso');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('rol_permiso');
    }
};
