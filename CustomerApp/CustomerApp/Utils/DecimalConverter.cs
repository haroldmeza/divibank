using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text.Json;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace CustomerApp.Utils
{
    public class DecimalConverter : JsonConverter<Decimal>
    {
        public override Decimal Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
        {
            return Decimal.Parse(String.Format(new CultureInfo("en-US"), "{0:C2}", reader.GetString()));
        }

        public override void Write(Utf8JsonWriter writer, Decimal value, JsonSerializerOptions options)
        {
            writer.WriteStringValue(String.Format(new CultureInfo("en-US"), "{0:C2}", value).Replace("$","").Replace(",",""));
        }
    }
}
