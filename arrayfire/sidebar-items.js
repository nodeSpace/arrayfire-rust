initSidebarItems({"constant":[["DEFAULT_RANDOM_ENGINE",""],["MERSENNE",""],["PHILOX",""],["THREEFRY",""]],"enum":[["AfError","Error codes"],["Backend","Compute/Acceleration Backend"],["BinaryOp","Binary operation types for generalized scan functions"],["BorderType","Helps determine how to pad kernels along borders"],["ColorMap","Dictates what color map is used for Image rendering"],["ColorSpace","Identify the color space of given image(Array)"],["Connectivity","Used by `regions` function to identify type of connectivity"],["ConvDomain","Helps determine if convolution is in Spatial or Frequency domain"],["ConvMode","Helps determine the size of output of convolution"],["DType","Types of Array data type"],["HomographyType","Homography type"],["InterpType","Dictates the interpolation method to be used by a function"],["MarkerType","Plotting markers"],["MatProp","Helps determine the type of a Matrix"],["MatchType","Error metric used by `matchTemplate` function"],["MomentType","Image moment types"],["NormType","Norm type"],["RandomEngineType","Random engine types"],["SparseFormat","Sparse storage format type"],["YCCStd","YCbCr Standards"]],"fn":[["abs","Computes absolute value"],["accum",""],["acos","Compute acos"],["acosh","Compute acosh"],["add","Addition of two Arrays"],["all_true",""],["all_true_all",""],["and","Elementwise logical and operation of two Arrays"],["any_true",""],["any_true_all",""],["approx1","Perform signal interpolation for 1d signals"],["approx2","Perform signal interpolation for 2d signals"],["arg","Computes phase value"],["asin","Compute asin"],["asinh","Compute asinh"],["assign_gen","Assign an Array to another after indexing it using any combination of Array's and Sequence's"],["assign_seq","Assign(copy) content of an Array to another Array indexed by Sequences"],["atan","Compute atan"],["atan2","Calculate atan2 of two Arrays"],["atanh","Compute atanh"],["bilateral","Bilateral Filter."],["bitand","Elementwise AND(bit) operation of two Arrays"],["bitor","Elementwise OR(bit) operation of two Arrays"],["bitxor","Elementwise XOR(bit) operation of two Arrays"],["cbrt","Compute the cube root"],["ceil","Ceil the values in an Array"],["cholesky","Perform Cholesky decomposition"],["cholesky_inplace","Perform inplace Cholesky decomposition"],["clamp","Clamp the values of Array"],["col","Extract `col_num` col from `input` Array"],["color_space","Color space conversion"],["cols","Get all cols from `first` to `last` in the `input` Array"],["conjg","Compute the complex conjugate"],["constant","Create an Array with constant value"],["convolve1","1d convolution"],["convolve2","2d convolution"],["convolve2_sep","Separable convolution for 2d signals"],["convolve3","3d convolution"],["corrcoef","Compute correlation coefficient"],["cos","Compute cos"],["cosh","Compute cosh"],["count",""],["count_all",""],["cov","Compute covariance of two Arrays"],["cplx","Create a complex Array from real Array"],["cplx2","Create complex array from two Arrays"],["det","Find the determinant of the matrix"],["device_count","Get total number of available devices"],["device_gc","Call the garbage collection routine"],["device_mem_info","Get memory information from the memory manager for the current active device"],["diag_create","Create a diagonal matrix"],["diag_extract","Extract diagonal from a given Matrix"],["diff1",""],["diff2",""],["dilate","Dilate an Image"],["dilate3","Dilate a Volume"],["div","Division of two Arrays"],["dog","Difference of Gaussians."],["dot","Calculate the dot product of vectors."],["eq","Perform `equals` comparison operation"],["erf","Compute error function value"],["erfc","Compute the complementary error function value"],["erode","Erode an Image"],["erode3","Erode a Volume"],["eval_multiple","evaluate multiple arrays"],["exp","Compute e raised to the power of value"],["expm1","Compute e raised to the power of value -1"],["factorial","Compute the factorial"],["fast","Fast feature detector"],["fft","Fast fourier transform for 1d signals"],["fft2","Fast fourier transform for 2d signals"],["fft2_c2r","2d Complex to Real fast fourier transform"],["fft2_inplace","In place 2d dimensional Fast fourier transform"],["fft2_r2c","2d Real to Complex fast fourier transform"],["fft3","Fast fourier transform for 3d signals"],["fft3_c2r","3d Complex to Real fast fourier transform"],["fft3_inplace","In place 3d dimensional Fast fourier transform"],["fft3_r2c","3d Real to Complex fast fourier transform"],["fft_c2r","1d Complex to Real fast fourier transform"],["fft_convolve1","1d convolution using fast-fourier transform"],["fft_convolve2","2d convolution using fast-fourier transform"],["fft_convolve3","3d convolution using fast-fourier transform"],["fft_inplace","In place 1d dimensional Fast fourier transform"],["fft_r2c","1d Real to Complex fast fourier transform"],["fir","Finite impulse filter"],["flat","Flatten the multidimensional Array to an 1D Array"],["flip","Flip the Array"],["floor","Floor the values in an Array"],["gaussian_kernel","Creates a Gaussian Kernel."],["ge","Perform `greater than equals` comparison operation"],["get_active_backend","Get current active backend"],["get_available_backends","Get the available backends"],["get_backend_count","Get the available backend count"],["get_default_random_engine","Get default random engine"],["get_device","Get the current active device id"],["get_mem_step_size","Get the minimum memory chunk size"],["get_seed","Get the seed of random number generator"],["get_size","Get size, in bytes, of the arrayfire native type"],["get_version","Get ArrayFire Version Number"],["gradient","Calculate the gradients"],["gray2rgb","Grayscale to Color(RGB) conversion"],["gt","Perform `greater than` comparison operation"],["hamming_matcher","Hamming feature matcher"],["handle_error_general",""],["harris","Harris corner detector."],["hist_equal","Histogram Equalization"],["histogram","Compute Histogram of an Array"],["homography","Homography estimation"],["hsv2rgb","HSV to RGB color space conversion"],["hypot","Compute length of hypotenuse of two Arrays"],["identity","Create an identity array with 1's in diagonal"],["ifft","Inverse fast fourier transform for 1d signals"],["ifft2","Inverse fast fourier transform for 1d signals"],["ifft2_inplace","In place 2d dimensional inverse fast fourier transform"],["ifft3","Inverse fast fourier transform for 1d signals"],["ifft3_inplace","In place 3d dimensional inverse fast fourier transform"],["ifft_inplace","In place 1d dimensional inverse fast fourier transform"],["iir","Infinite impulse response filter"],["imag","Extract imaginary values from a complex Array"],["imax",""],["imax_all",""],["imin",""],["imin_all",""],["index","Indexes the `input` Array using `seqs` Sequences"],["index_gen","Index an Array using any combination of Array's and Sequence's"],["info","Print library meta-info"],["init","Initialize ArrayFire library"],["inverse","Compute inverse of a matrix"],["iota","Create a range of values"],["is_double_available","Check if a device has double support"],["is_eval_manual","Get eval flag value"],["is_imageio_available","Function to check if Image I/O is available"],["is_lapack_available","Function to check if lapack support is available"],["isinf","Check if values are infinity"],["isnan","Check if values are NaN"],["iszero","Check if values are zero"],["join","Join two arrays"],["join_many","Join multiple arrays"],["le","Perform `less than equals` comparison operation"],["lgamma","Compute the logarithm of absolute values of gamma function"],["load_image","Load Image into Array"],["load_image_native","Load Image into Array in it's native type"],["locate","Locate the indices of non-zero elements."],["log","Compute the natural logarithm"],["log10","Compute logarithm base 10"],["log1p","Compute the logarithm of input Array + 1"],["log2","Compute logarithm base 2"],["lookup","Lookup(hash) an Array using another Array"],["lower","Create lower triangular matrix"],["lt","Perform `less than` comparison operation"],["lu","Perform LU decomposition"],["lu_inplace","Perform inplace LU decomposition"],["match_template","Image matching"],["matmul","Matrix multiple of two Arrays"],["max",""],["max_all",""],["maxfilt","Box filter with maximum as box operation"],["maxof","Elementwise maximum operation of two Arrays"],["mean","Mean along specified dimension"],["mean_all","Compute mean of all data"],["mean_all_weighted","Compute weighted mean of all data"],["mean_shift","Meanshift Filter."],["mean_weighted","Weighted mean along specified dimension"],["medfilt","Median filter"],["medfilt1","One dimensional median filter on image"],["median","Median along specified dimension"],["median_all","Compute median of all data"],["min",""],["min_all",""],["minfilt","Box filter with minimum as box operation"],["minof","Elementwise minimum operation of two Arrays"],["moddims","Change the shape of the Array"],["modulo","Compute modulo of two Arrays"],["moments","Find Image moments"],["moments_all","Find Image moment for whole image"],["mul","Multiplication of two Arrays"],["nearest_neighbour","Nearest Neighbour."],["neq","Elementwise not equals comparison of two Arrays"],["norm","Find the norm of a matrix"],["or","Elementwise logical or operation of two Arrays"],["orb","ORB feature descriptor"],["pow","Computer power"],["pow2","Compute two raised to the power of value"],["print","Print data in the Array"],["print_gen","Generalized Array print function"],["print_mem_info","Print buffer details from the ArrayFire device manager"],["product",""],["product_all",""],["product_nan","Product of elements along specific dimension using user specified value instead of `NAN` values"],["product_nan_all","Product of all values using user provided value for `NAN`"],["qr","Perform QR decomposition"],["qr_inplace","Perform inplace QR decomposition"],["randn","Create random numbers from normal distribution"],["random_normal","Generate array of normal numbers using a random engine"],["random_uniform","Generate array of uniform numbers using a random engine"],["randu","Create random numbers from uniform distribution"],["range","Create a Range of values"],["rank","Find rank of a matrix"],["real","Extract real values from a complex Array"],["regions","Find blobs in given image."],["register_error_handler","Register user provided error handler"],["rem","Compute remainder from two Arrays"],["reorder","Reorder the array in specified order"],["replace","Inplace replace in Array based on a condition"],["replace_scalar","Inplace replace in Array based on a condition"],["resize","Resize an Image"],["rgb2gray","Color(RGB) to Grayscale conversion"],["rgb2hsv","RGB to HSV color space conversion"],["rgb2ycbcr","RGB to YCbCr colorspace converter."],["root","Compute root"],["rotate","Rotate an Image"],["round","Round the values in an Array"],["row","Extract `row_num` row from `input` Array"],["rows","Get an Array with all rows from `first` to `last` in the `input` Array"],["sat","Summed area table of an Image"],["save_image","Save an Array to an image file"],["save_image_native","Save an Array without modifications to an image file"],["scale","Scale an Image"],["scan","Generalized scan"],["scan_by_key","Generalized scan by key"],["select","Element wise conditional operator for Arrays"],["selectl","Element wise conditional operator for Arrays"],["selectr","Element wise conditional operator for Arrays"],["set_backend","Toggle backends between cuda, opencl or cpu"],["set_col","Set `col_num`^th col in `input` Array to a new Array `new_col`"],["set_cols","Set cols from `first` to `last` in `input` Array with cols from Array `new_cols`"],["set_default_random_engine_type","Set the random engine type for default random number generator"],["set_device","Set active device"],["set_fft_plan_cache_size","Set fft plan cache size"],["set_intersect","Find intersection of two sets"],["set_manual_eval","Set eval flag value"],["set_mem_step_size","Set the minimum memory chunk size"],["set_row","Set `row_num`^th row in `input` Array to a new Array `new_row`"],["set_rows","Set rows from `first` to `last` in `input` Array with rows from Array `new_rows`"],["set_seed","Set seed for random number generation"],["set_slice","Set slice `slice_num` in `input` Array to a new Array `new_slice`"],["set_slices","Set `first` to `last` slices of `input` Array to a new Array `new_slices`"],["set_union","Find union of two sets"],["set_unique","Find unique values from a Set"],["shift","Circular shift of values along specified dimension"],["shiftl","Compute left shift"],["shiftr","Compute right shift"],["sigmoid","Compute sigmoid function"],["sign","Computes the sign of input Array values"],["sin","Compute sin"],["sinh","Compute sinh"],["skew","Skew an image"],["slice","Get `slice_num`^th slice from `input` Array"],["slices","Get slices from `first` to `last` in `input` Array"],["sobel","Sobel Operator"],["solve","Solve a system of equations"],["solve_lu","Solve a system of equations"],["sort","Sort the values in input Arrays"],["sort_by_key","Sort the values in input Arrays"],["sort_index","Sort the values in input Arrays"],["sparse","Create sprase matrix from arrays"],["sparse_convert_to","Convert between sparse formats"],["sparse_from_dense","Convert dense array to sparse array"],["sparse_from_host","Create sprase matrix from data on host memory"],["sparse_get_col_indices","Get cololumn indices Array"],["sparse_get_format","Get sparse format"],["sparse_get_info","Get sparse Array information"],["sparse_get_nnz","Get number of non-zero elements in sparse array"],["sparse_get_row_indices","Get row indices Array"],["sparse_get_values","Get values of sparse Array"],["sparse_to_dense","Convert sparse array to dense array"],["sqrt","Compute the square root"],["stdev","Standard deviation along specified dimension"],["stdev_all","Compute standard deviation of all data"],["sub","Subtraction of two Arrays"],["sum",""],["sum_all",""],["sum_nan","Sum along specific dimension using user specified value instead of `NAN` values"],["sum_nan_all","Sum all values using user provided value for `NAN`"],["susan","SUSAN corner detector."],["svd","Perform Singular Value Decomposition"],["svd_inplace","Perform Singular Value Decomposition inplace"],["sync","Sync all operations on given device"],["tan","Compute tan"],["tanh","Compute tanh"],["tgamma","Compute gamma function"],["tile","Tile the input array along specified dimension"],["transform","Transform(Affine) an Image"],["transform_coords","Transform input coordinates"],["translate","Translate an Image"],["transpose","Transpose of a matrix."],["transpose_inplace","Inplace transpose of a matrix."],["trunc","Truncate the values in an Array"],["unwrap","Generate an array with image windows as columns"],["upper","Create upper triangular matrix"],["var","Compute Variance along a specific dimension"],["var_all","Compute Variance of all elements"],["var_all_weighted","Compute weighted variance of all data"],["var_weighted","Weight variance along specified dimension"],["wrap","Converts unwrapped image to an image"],["ycbcr2rgb","YCbCr to RGB colorspace converter."]],"macro":[["af_print!","Print given message before printing out the Array to standard output"],["eval!","Evaluate arbitrary number of arrays"],["join_many!","Join multiple Arrays along a given dimension"],["mem_info!","Macro to print the current stats of ArrayFire's memory manager."]],"struct":[["Array","A multidimensional data container"],["Callback","Wrap ErrorCallback function pointer inside a structure to enable implementing Send, Sync traits on it."],["Dim4","Dim4 is used to store Array dimensions"],["Features","A set of Array objects (usually, used in Computer vision context)"],["Indexer","Struct to manage an array of resources of type `af_indexer_t`(ArrayFire C struct)"],["RandomEngine","Random number generator engine"],["Seq","Sequences are used for indexing Arrays"],["Window","Used to render Array objects"]],"trait":[["HasAfEnum","Types of the data that can be generated using ArrayFire data generation functions."]],"type":[["ErrorCallback",""]]});