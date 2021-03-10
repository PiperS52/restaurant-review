class Restaurant < ApplicationRecord
  has_many :reviews

  def slugify
    slef.slug = name.parameterize
  end 
end
