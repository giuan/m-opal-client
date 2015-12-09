require_relative 'm-opal-jquery'

# add method to Element
class JQ
  def form_to_h
    params = serialize_array
    h = {}
    params.each do |e|
      name = e.JS['name']
      if (v = h[name])
        if v.is_a? Array
          v << e.JS['value']
        else
          h[name] = [v, e.JS['value']]
        end
      else
        h[name] = e.JS['value']
      end
    end
    h
  end

  def self.update_dom (names_values)
    names_values.each_pair do |name, value|
      JQ("[#{name}]").val = value
    end

  end
end
