window.SIDEBAR_ITEMS = {"constant":["CLUSTERED_FORWARD_HANDLE","CLUSTERED_FORWARD_STORAGE_BUFFER_COUNT","FOG_SHADER_HANDLE","FORWARD_IO_HANDLE","MAX_CASCADES_PER_LIGHT","MAX_DIRECTIONAL_LIGHTS","MAX_JOINTS","MAX_UNIFORM_BUFFER_POINT_LIGHTS","MESH_BINDINGS_HANDLE","MESH_FUNCTIONS_HANDLE","MESH_PIPELINE_VIEW_LAYOUT_SAFE_MAX_TEXTURES","MESH_SHADER_HANDLE","MESH_TYPES_HANDLE","MESH_VIEW_BINDINGS_HANDLE","MESH_VIEW_TYPES_HANDLE","MORPH_HANDLE","PARALLAX_MAPPING_SHADER_HANDLE","PBR_AMBIENT_HANDLE","PBR_BINDINGS_SHADER_HANDLE","PBR_DEFERRED_FUNCTIONS_HANDLE","PBR_DEFERRED_TYPES_HANDLE","PBR_FRAGMENT_HANDLE","PBR_FUNCTIONS_HANDLE","PBR_LIGHTING_HANDLE","PBR_PREPASS_FUNCTIONS_SHADER_HANDLE","PBR_PREPASS_SHADER_HANDLE","PBR_SHADER_HANDLE","PBR_TRANSMISSION_HANDLE","PBR_TYPES_SHADER_HANDLE","PREPASS_BINDINGS_SHADER_HANDLE","PREPASS_IO_SHADER_HANDLE","PREPASS_SHADER_HANDLE","PREPASS_UTILS_SHADER_HANDLE","RGB9E5_FUNCTIONS_HANDLE","SHADOWS_HANDLE","SHADOW_SAMPLING_HANDLE","SKINNING_HANDLE","UTILS_HANDLE","VIEW_TRANSFORMATIONS_SHADER_HANDLE"],"enum":["AlphaMode","ClusterConfig","ClusterFarZMode","FogFalloff","GpuPointLights","LightEntity","OpaqueRendererMethod","ParallaxMappingMethod","ScreenSpaceAmbientOcclusionQualityLevel","ShadowFilteringMethod","SimulationLightSystems"],"fn":["add_clusters","alpha_mode_pipeline_key","build_directional_light_cascades","calculate_cluster_factors","check_light_mesh_visibility","clear_directional_light_cascades","extract_camera_previous_view_projection","extract_clusters","extract_lights","extract_materials","extract_meshes","extract_skins","generate_view_layouts","get_bind_group_layout_entries","get_bindings","prepare_clusters","prepare_fog","prepare_lights","prepare_materials","prepare_mesh_bind_group","prepare_mesh_view_bind_groups","prepare_prepass_view_bind_group","prepare_previous_view_projection_uniforms","prepare_skins","queue_material_meshes","queue_prepass_material_meshes","queue_shadows","screen_space_specular_transmission_pipeline_key","setup_morph_and_skinning_defs","tonemapping_pipeline_key","update_directional_light_frusta","update_mesh_previous_global_transforms","update_point_light_frusta","update_previous_view_projections","update_spot_light_frusta"],"mod":["deferred","draw_3d_graph","prelude","wireframe"],"struct":["AmbientLight","Cascade","CascadeShadowConfig","CascadeShadowConfigBuilder","Cascades","CascadesVisibleEntities","ClusterZConfig","Clusters","CubemapVisibleEntities","DefaultOpaqueRendererMethod","DirectionalLight","DirectionalLightBundle","DirectionalLightShadowMap","DrawMesh","EnvironmentMapLight","ExtendedMaterial","ExtractedClusterConfig","ExtractedClustersPointLights","ExtractedDirectionalLight","ExtractedMaterials","ExtractedPointLight","FogMeta","FogPlugin","FogSettings","GlobalLightMeta","GlobalVisiblePointLights","GpuDirectionalCascade","GpuDirectionalLight","GpuFog","GpuLights","GpuPointLight","GpuPointLightsStorage","GpuPointLightsUniform","LightMeta","MaterialBindGroupId","MaterialExtensionKey","MaterialExtensionPipeline","MaterialMeshBundle","MaterialPipeline","MaterialPipelineKey","MaterialPlugin","MaterialProperties","Mesh3d","MeshBindGroups","MeshFlags","MeshLayouts","MeshPipeline","MeshPipelineKey","MeshPipelineViewLayout","MeshPipelineViewLayoutKey","MeshRenderPlugin","MeshTransforms","MeshUniform","MeshViewBindGroup","NotShadowCaster","NotShadowReceiver","PbrPlugin","PointLight","PointLightBundle","PointLightShadowMap","PrepareNextFrameMaterials","PreparedMaterial","PrepassPipeline","PrepassPipelinePlugin","PrepassPlugin","PrepassViewBindGroup","PreviousGlobalTransform","PreviousViewProjection","PreviousViewProjectionUniformOffset","PreviousViewProjectionUniforms","RenderMaterials","RenderMeshInstance","RenderMeshInstances","ScreenSpaceAmbientOcclusionBundle","ScreenSpaceAmbientOcclusionPlugin","ScreenSpaceAmbientOcclusionSettings","ScreenSpaceAmbientOcclusionTextures","SetMaterialBindGroup","SetMeshBindGroup","SetMeshViewBindGroup","SetPrepassViewBindGroup","Shadow","ShadowPassNode","ShadowSamplers","ShadowView","SkinIndex","SkinUniform","SpotLight","SpotLightBundle","StandardMaterial","StandardMaterialFlags","StandardMaterialKey","StandardMaterialUniform","TransmittedShadowReceiver","ViewClusterBindings","ViewFogUniformOffset","ViewLightEntities","ViewLightsUniformOffset","ViewShadowBindings","VisiblePointLights"],"trait":["Material","MaterialExtension"],"type":["DrawPrepass","PbrBundle","RenderMaterialInstances"]};