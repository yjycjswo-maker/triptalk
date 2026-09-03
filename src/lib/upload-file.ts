interface UploadFileResponse {
  data?: { uploadFile: string };
  errors?: { message: string }[];
}

export async function uploadFile(file: File): Promise<string> {
  const formData = new FormData();
  formData.append(
    "operations",
    JSON.stringify({
      query: "mutation UploadFile($file: Upload!) { uploadFile(file: $file) }",
      variables: { file: null },
    }),
  );
  formData.append("map", JSON.stringify({ 0: ["variables.file"] }));
  formData.append("0", file);

  const response = await fetch("/api", { method: "POST", body: formData });
  const result = (await response.json()) as UploadFileResponse;

  if (!response.ok || result.errors?.length || !result.data?.uploadFile) {
    throw new Error(result.errors?.[0]?.message ?? "사진 업로드에 실패했습니다.");
  }

  return result.data.uploadFile;
}
