(function() {var type_impls = {
"arrow_json":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Writer%3CW,+F%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/arrow_json/writer.rs.html#709-772\">source</a><a href=\"#impl-Writer%3CW,+F%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;W, F&gt; <a class=\"struct\" href=\"arrow_json/writer/struct.Writer.html\" title=\"struct arrow_json::writer::Writer\">Writer</a>&lt;W, F&gt;<div class=\"where\">where\n    W: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a>,\n    F: <a class=\"trait\" href=\"arrow_json/writer/trait.JsonFormat.html\" title=\"trait arrow_json::writer::JsonFormat\">JsonFormat</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method\"><a class=\"src rightside\" href=\"src/arrow_json/writer.rs.html#715-723\">source</a><h4 class=\"code-header\">pub fn <a href=\"arrow_json/writer/struct.Writer.html#tymethod.new\" class=\"fn\">new</a>(writer: W) -&gt; Self</h4></section></summary><div class=\"docblock\"><p>Construct a new writer</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.write_row\" class=\"method\"><a class=\"src rightside\" href=\"src/arrow_json/writer.rs.html#726-739\">source</a><h4 class=\"code-header\">pub fn <a href=\"arrow_json/writer/struct.Writer.html#tymethod.write_row\" class=\"fn\">write_row</a>(&amp;mut self, row: &amp;<a class=\"enum\" href=\"https://docs.rs/serde_json/1.0.108/serde_json/value/enum.Value.html\" title=\"enum serde_json::value::Value\">Value</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, ArrowError&gt;</h4></section></summary><div class=\"docblock\"><p>Write a single JSON row to the output writer</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.write\" class=\"method\"><a class=\"src rightside\" href=\"src/arrow_json/writer.rs.html#742-747\">source</a><h4 class=\"code-header\">pub fn <a href=\"arrow_json/writer/struct.Writer.html#tymethod.write\" class=\"fn\">write</a>(&amp;mut self, batch: &amp;RecordBatch) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, ArrowError&gt;</h4></section></summary><div class=\"docblock\"><p>Convert the <code>RecordBatch</code> into JSON rows, and write them to the output</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.write_batches\" class=\"method\"><a class=\"src rightside\" href=\"src/arrow_json/writer.rs.html#750-755\">source</a><h4 class=\"code-header\">pub fn <a href=\"arrow_json/writer/struct.Writer.html#tymethod.write_batches\" class=\"fn\">write_batches</a>(\n    &amp;mut self,\n    batches: &amp;[&amp;RecordBatch]\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, ArrowError&gt;</h4></section></summary><div class=\"docblock\"><p>Convert the [<code>RecordBatch</code>] into JSON rows, and write them to the output</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.finish\" class=\"method\"><a class=\"src rightside\" href=\"src/arrow_json/writer.rs.html#760-766\">source</a><h4 class=\"code-header\">pub fn <a href=\"arrow_json/writer/struct.Writer.html#tymethod.finish\" class=\"fn\">finish</a>(&amp;mut self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, ArrowError&gt;</h4></section></summary><div class=\"docblock\"><p>Finishes the output stream. This function must be called after\nall record batches have been produced. (e.g. producing the final <code>']'</code> if writing\narrays.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.into_inner\" class=\"method\"><a class=\"src rightside\" href=\"src/arrow_json/writer.rs.html#769-771\">source</a><h4 class=\"code-header\">pub fn <a href=\"arrow_json/writer/struct.Writer.html#tymethod.into_inner\" class=\"fn\">into_inner</a>(self) -&gt; W</h4></section></summary><div class=\"docblock\"><p>Unwraps this <code>Writer&lt;W&gt;</code>, returning the underlying writer</p>\n</div></details></div></details>",0,"arrow_json::writer::LineDelimitedWriter","arrow_json::writer::ArrayWriter"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-Writer%3CW,+F%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/arrow_json/writer.rs.html#687\">source</a><a href=\"#impl-Debug-for-Writer%3CW,+F%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;W, F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"arrow_json/writer/struct.Writer.html\" title=\"struct arrow_json::writer::Writer\">Writer</a>&lt;W, F&gt;<div class=\"where\">where\n    W: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,\n    F: <a class=\"trait\" href=\"arrow_json/writer/trait.JsonFormat.html\" title=\"trait arrow_json::writer::JsonFormat\">JsonFormat</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/arrow_json/writer.rs.html#687\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/nightly/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","arrow_json::writer::LineDelimitedWriter","arrow_json::writer::ArrayWriter"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-RecordBatchWriter-for-Writer%3CW,+F%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/arrow_json/writer.rs.html#774-786\">source</a><a href=\"#impl-RecordBatchWriter-for-Writer%3CW,+F%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;W, F&gt; RecordBatchWriter for <a class=\"struct\" href=\"arrow_json/writer/struct.Writer.html\" title=\"struct arrow_json::writer::Writer\">Writer</a>&lt;W, F&gt;<div class=\"where\">where\n    W: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a>,\n    F: <a class=\"trait\" href=\"arrow_json/writer/trait.JsonFormat.html\" title=\"trait arrow_json::writer::JsonFormat\">JsonFormat</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.write\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/arrow_json/writer.rs.html#779-781\">source</a><a href=\"#method.write\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">write</a>(&amp;mut self, batch: &amp;RecordBatch) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, ArrowError&gt;</h4></section></summary><div class='docblock'>Write a single batch to the writer.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.close\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/arrow_json/writer.rs.html#783-785\">source</a><a href=\"#method.close\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">close</a>(self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, ArrowError&gt;</h4></section></summary><div class='docblock'>Write footer or termination data, then mark the writer as done.</div></details></div></details>","RecordBatchWriter","arrow_json::writer::LineDelimitedWriter","arrow_json::writer::ArrayWriter"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()