<?php

namespace StoreTI\Models;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;

/**
 * Class Tag.
 *
 * @package namespace StoreTI\Models;
 */
class Tag extends Model implements Transformable
{
    use TransformableTrait;
    public $timestamps = false;
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['id','title','source_id','source_type'];

    public function taglable()
    {
        return $this->morphTo();
    }
}
