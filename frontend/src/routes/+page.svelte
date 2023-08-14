<script lang="ts">
  import axios from "axios";

  const api_path = import.meta.env.VITE_BASE_URL;
  let test_result: string;
  axios
    .get(api_path + "/api/test")
    .then((response) => (test_result = response.data["test"]))
    .catch((error) => console.log(error));
</script>

<h1>Firebase Test</h1>
<p>
  Result of API call to /api/test: {test_result}
</p>
